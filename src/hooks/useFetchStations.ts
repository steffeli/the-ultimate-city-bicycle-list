import { useEffect, useState } from "react";
import { Station } from "../domain";

/*
 * First combines the raw data json and maps the station status id's with the id's from station info.
 * Maps the relevant data to a internal Station domain model. Lastly sorts the list by station name.
 */
function mapRawDataToStations(stationInfo: Record<string, any>, stationStatus: Record<string, any>): Station[] {
    const combined = stationInfo.data.stations.map((si: any) => ({...si, ...stationStatus.data.stations.find((ss: any) => ss.station_id === si.station_id)}))
    const mappedStations: Station[] = combined.map((s: any) => ({id: s.station_id, name: s.name, numOfBikesAvailable: s.num_bikes_available, numOfDocksAvailable: s.num_docks_available}))
    return mappedStations.sort((a, b) => a.name.localeCompare(b.name))
}

export function useFetchStations(clientId: string): [boolean, Station[], any] {

    const headers = {headers: {'Client-Identifier': clientId}}
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)
    const [stations, setStations] = useState<Station[]>([])

    useEffect(() => {
        Promise.all([
            fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json', {...headers}),
            fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json', {...headers})
        ])
        .then((responses) => Promise.all(responses.map((response) => response.json())))
        .then((data) => setStations(mapRawDataToStations(data[0], data[1])))
        .catch((error) => setErrors(error))
        .finally(() => setLoading(false))
    }, [])

    return [loading, stations, errors]

}