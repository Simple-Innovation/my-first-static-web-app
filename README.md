# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Debug

```sh
npm install react-scripts@latest # Needed to avoid the "Error: error:0308010C:digital envelope routines::unsupported" error
npm install -D @azure/static-web-apps-cli
npm install
nvm use 18 # Needed to avoid the error "Found Azure Functions Core Tools v4 which is incompatible with your current Node.js v20.10.0."
npm run build
```

- Stop codespace
- Start codespace

```sh
swa init
swa build
swa start
```
