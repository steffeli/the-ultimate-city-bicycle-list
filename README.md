# Den ultimate bysykkel-lista

This application uses the open data available from Oslo Bysykkel (https://oslobysykkel.no/apne-data/sanntid) to display a list of all the stations and their availability in terms of bicycles and open docks.

## Prerequisite

Before you start you need to set the `CLIENT_IDENTIFIER` environment variable in order to build and launch the app locally.
```sh
export CLIENT_IDENTIFIER=<some-unique-string>
```
For windows do the following:
```sh
set CLIENT_IDENTIFIER=<some-unique-string>
```
## Start application
To build and serve the local application first install the dependencies  by runing `npm install`. Then build and serve the application with `npm run start`

## Local development
To start the build in watch mode run `npm run watch`
