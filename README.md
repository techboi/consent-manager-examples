# Consent Manager Examples

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
yarn add @techboi/consent-manager --registry http://localhost:4873
```
