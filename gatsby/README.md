<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Consent Manager example for Gatsby
</h1>

This extends the default starter located at https://github.com/gatsbyjs/gatsby-starter-default with Consent Manager.

## Developing

Install via `yarn`. (npm should work fine as well!)

```shell
yarn develop
```

Set up environment variables. We recommend [direnv](https://direnv.net/) but you might want to create `.env.*` files as suggested by the [Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)

```
export GATSBY_MATOMO_URL="https://your-matomo-instance.com"
export GATSBY_MATOMO_SITE_ID=42
```

## Building

```shell
yarn build
```

## 🧐 What's important inside?

1.  **`/src/components/consent-manager`**: This directory contains an example how you would integrate Consent Manager with a custom UI into Gatsby

2.  **`/src/components/consent-manager/wrapper.js`**: This file does all the actual Consent Manager integration. We might provide a Gatsby plugin later on.

3.  **`gatsby-browser.js`**: Implements `wrapRootElement` from [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) to wrap your whole application with Consent Manager.

4.  **`gatsby-ssr.js`**: Reexports `wrapRootElement` to keep it consistent with SSR.

@todo We might not need to reexport for SSR. Evaluate!
