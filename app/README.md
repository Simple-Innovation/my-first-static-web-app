# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Debug

```sh
npm install react-scripts@latest # Needed to avoid the "Error: error:0308010C:digital envelope routines::unsupported" error
npm install -g @azure/static-web-apps-cli@latest
```
This is due to be fixed in the next release
Needed to avoid the error "Found Azure Functions Core Tools v4 which is incompatible with your current Node.js v20.10.0." edit the /usr/local/share/nvm/versions/node/v20.12.1/lib/node_modules/@azure/static-web-apps-cli/dist/core/func-core-tools.js line 45 to 

```js
            return nodeVersion >= 14 && nodeVersion <= 20;
```

- Stop codespace
- Start codespace


```sh
swa start app/build --api-location api
```
