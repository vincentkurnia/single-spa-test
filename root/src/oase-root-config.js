import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "navigation",
  app: () => System.import("@oase/navigation-mfe"),
  activeWhen: ["/"]
});

registerApplication({
  name: "demo",
  app: () => System.import("@oase/spa-mfe"),
  activeWhen: ["/demo"]
});

registerApplication({
  name: "another",
  app: () => System.import("@oase/another-mfe"),
  activeWhen: ["/another"]
});

start({
  urlRerouteOnly: true,
});
