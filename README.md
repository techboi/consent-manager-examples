# Consent Manager Examples

## Parcel 2.0

https://consent-manager-example-create-react-app.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0ac541e-20c9-4eb1-929e-0e5380499421/deploy-status)](https://app.netlify.com/sites/consent-manager-example-parcel/deploys)

## Create React App

https://consent-manager-example-create-react-app.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/f04d9ed2-0e72-4434-9709-3f660ad0373e/deploy-status)](https://app.netlify.com/sites/consent-manager-example-create-react-app/deploys)

## GatsbyJS

https://consent-manager-example-create-gatsby.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/6fb0f8a2-8683-40f5-bad6-a9b21e73d988/deploy-status)](https://app.netlify.com/sites/consent-manager-example-gatsby/deploys)

# Development / Usage

## Using the local registry

**Fresh Build**
```sh
docker-compose up --build
```

**Remove old packages (aka reset volumes)**
```sh
docker-compose down --volumes
```

**Generate a new user default user httpasswd**
```sh
htpasswd -c conf/httpasswd consent-manager-bot
# You'll be prompted to set a password
```

**Publish lerna packages to local registry**

Run this in `consent-manager` repo.

```sh
npx lerna publish --registry http://localhost:4873 --yes --force-publish='*' --no-git-tag-version --no-commit-hooks --no-push --exact --dist-tag=latest
```


**Install local package**

First install all except local.

```sh
yarn add @consent-manager/core --registry http://localhost:4873
```

**Use local registry as default**

Crate `.yarnrc`

```sh
registry "http://localhost:4873"
```
