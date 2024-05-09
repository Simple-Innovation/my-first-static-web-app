# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Debug

```sh
npm install react-scripts@latest # Needed to avoid the "Error: error:0308010C:digital envelope routines::unsupported" error
npm install -g @azure/static-web-apps-cli@latest
npm run build
```

- Stop codespace
- Start codespace

- Install Azure Functions for Debian https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-typescript#install-the-azure-functions-core-tools

```sh
nvm use 18 # Needed to avoid the error "Found Azure Functions Core Tools v4 which is incompatible with your current Node.js v20.10.0."
swa start app/build --api-location api
```
