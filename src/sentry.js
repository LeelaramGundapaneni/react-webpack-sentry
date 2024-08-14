// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

import {
  BrowserClient,
  makeFetchTransport,
  getDefaultIntegrations,
} from "@sentry/browser";
import { Hub, makeMain } from "@sentry/hub";

const createHub = () => {
  const client = new BrowserClient({
    dsn: "https://8adabb1dd39e4ebd8f52ccfabc187c1f@sentry.smallcase.com/103",
    integrations: [
      new Sentry.BrowserTracing({}),
      new Sentry.Replay(),
      ...getDefaultIntegrations(),
    ],
    transport: makeFetchTransport,
    attachStacktrace: true,
  });

  const hub = new Hub(client);

  hub.bindClient(hub);
  return makeMain(hub);
};

const sentryHub = createHub();
const getHub = () => sentryHub;

export default getHub;
