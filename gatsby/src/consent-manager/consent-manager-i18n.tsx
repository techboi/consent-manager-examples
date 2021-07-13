import React, { useMemo } from "react"
import { useLingui } from "@lingui/react"
import { Trans } from "@lingui/macro"

import { Messages } from "@consent-manager/interface-default"

export const useMessages = (): Messages => {
  const { i18n } = useLingui()

  return useMemo(
    () => ({
      // General
      "consent-manager.close": i18n._("consent-manager.close", null, {
        message: "close",
      }),

      // Intro
      "consent-manager.introduction.title": () => (
        <Trans id="consent-manager.introduction.title">
          Data protection enabled
        </Trans>
      ),
      "consent-manager.introduction.description": () => (
        <Trans id="consent-manager.introduction.description">
          Some Website features are disabled to protect your privacy.
        </Trans>
      ),
      "consent-manager.introduction.learn-more": () => (
        <Trans id="consent-manager.introduction.learn-more">Learn more</Trans>
      ),
      "consent-manager.introduction.enable-all": () => (
        <Trans id="consent-manager.introduction.enable-all">
          Enable all features
        </Trans>
      ),

      // Form
      "consent-manager.form.headline": () => (
        <Trans id="consent-manager.form.headline">
          Website Features and Cookies
        </Trans>
      ),
      "consent-manager.form.description": () => (
        <Trans id="consent-manager.form.description">
          <p>
            By default third party features are disabled to protect your
            privacy.
          </p>
          <p>
            To view third-party content, you first have to accept their specific
            terms and conditions. This includes their cookie policies, which can
            change anytime and which we have no control over.
            <br />
            But if you do not view this content, no third-party cookies are
            installed on your device.
          </p>
          <p>
            By activating the features you agree to the providers' terms of use
            and their cookie policy. You can opt out at any time.
          </p>
        </Trans>
      ),
      "consent-manager.form.reset": () => (
        <Trans id="consent-manager.form.reset">reset message</Trans>
      ),
      "consent-manager.form.enable-all": () => (
        <Trans id="consent-manager.form.enable-all">enable all features</Trans>
      ),
      "consent-manager.form.disable-all": () => (
        <Trans id="consent-manager.form.disable-all">
          disable all features
        </Trans>
      ),
      "consent-manager.form.save": () => (
        <Trans id="consent-manager.form.save">save and close</Trans>
      ),

      // Fallback component
      "consent-manager.fallback.default.title": () => (
        <Trans id="consent-manager.fallback.default.title">
          Recommended external content
        </Trans>
      ),
      "consent-manager.fallback.default.description": ({
        IntegrationLabel,
        title,
      }) => (
        <Trans id="consent-manager.fallback.default.description">
          <p>
            This feature contains content by <IntegrationLabel />
          </p>
          <p>
            To view this third-party content, you first have to accept their
            specific terms and conditions.
          </p>
          <p>
            This includes their cookie policies, which we have no control over.
          </p>
        </Trans>
      ),

      "consent-manager.fallback.default.enable": ({ category, title }) => (
        <Trans id="consent-manager.fallback.default.enable">
          Enable {category} by {title}
        </Trans>
      ),
      "consent-manager.fallback.default.learn-more": () => (
        <Trans id="consent-manager.fallback.default.learn-more">
          Learn more
        </Trans>
      ),

      // Integration Default
      "consent-manager.integration.default.company": ({ IntegrationLabel }) => (
        <Trans id="consent-manager.integration.default.company">
          by <IntegrationLabel />
        </Trans>
      ),
      "consent-manager.integration.default.category": ({ category }) => (
        <Trans id="consent-manager.integration.default.category">
          {category}
        </Trans>
      ),
      "consent-manager.integration.default.title": ({ title }) => (
        <Trans id="consent-manager.integration.default.title">{title}</Trans>
      ),
      "consent-manager.integration.default.description": ({ description }) => (
        <Trans id="consent-manager.integration.default.description">
          {description}
        </Trans>
      ),
      "consent-manager.integration.default.privacy-policy": ({
        Link,
        title,
      }) => (
        <Link>
          ({title})<br />
          <br />
          {i18n._("{title}", {
            title: "foo",
            bar: () => "baz",
          })}
          <br />
          <Trans
            id="consent-manager.integration.default.privacy-policy"
            values={{ title }}
          >
            via {title}
          </Trans>
        </Link>
      ),

      // Custom integration overrides
      "consent-manager.integration.matomo.description": ({
        description,
        PrivacyPolicyLink,
      }) => (
        <p>
          <Trans id="consent-manager.integration.matomo.description">
            {description}
          </Trans>
          <br />
          <PrivacyPolicyLink />
        </p>
      ),
    }),
    [i18n.locale]
  )
}
