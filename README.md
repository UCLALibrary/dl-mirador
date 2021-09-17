## Development system requirements

 - node.js version v12.18.0 or greater ([Download node.js](https://nodejs.org/en/download/))
 - npm version v6.14.4 or greater ([Download npm](https://nodejs.org/en/download/))

### To test your setup

Clone https://github.com/UCLALibrary/dl-mirador
1. Run `$ npm install` from a terminal to install dependencies
1. Run `$ npm start` to start a development server and build a development version of your Mirador installation.
1. The browser should open a page that when eventually built you will see a Mirador viewer load at `http://localhost:8080`
1. Pass the manifest using parameter `manifest=` like ?manifest=https://gallica.bnf.fr/iiif/ark:/12148/btv1b525002505/manifest.json

## npm script commands available

| Command | Description |
|---|---|
| `npm run start ` | Builds your Mirador project and starts a server that runs at `http://localhost:8080` |
| `npm run build` | Builds a production ready build of your Mirador project in `/dist` |
| `npm run serve` | Starts a http server and serves files from `/dist` and index.html , use this to test the production files generated using `npm run build` |
