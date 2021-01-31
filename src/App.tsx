import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import List from './components/List'
import ListItem from './components/ListItem'
import Logo from './components/Logo'
import { useFetchStations } from './hooks/useFetchStations'

const AppContainer = styled('main')`
    max-width: 60rem;
    width: 100%;
    padding: 2rem 0;
`

const AppTitle = styled('h1')`
    font-size: 3rem;
    text-align: center;
    color: #005FC9;
`

const ErrorMessage = styled('h3')`
    color: red;
`

function App() {

    const [loading, stations, errors] = useFetchStations(`${process.env.CLIENT_IDENTIFIER}`)

    return (
        <AppContainer>
            <Logo />
            <AppTitle>Den ultimate bysykkel-lista</AppTitle>
            <section>
                {loading && <h3>Laster inn stasjoner...</h3>}
                {!loading && errors && <ErrorMessage>En feil har oppstått ved henting av data</ErrorMessage>}
                <List>
                    {!loading && !errors && stations.map(station => <ListItem name={station.name} bicycles={station.numOfBikesAvailable} docks={station.numOfDocksAvailable} />)}
                </List>
            </section>
        </AppContainer>
    )
}

export default App