import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://8adabb1dd39e4ebd8f52ccfabc187c1f@sentry.smallcase.com/103",
  integrations: [new Sentry.BrowserTracing({}), new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
