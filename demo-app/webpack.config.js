const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const packageJson = require("./package.json");

const port = 8080;
// const publicPath = `http://localhost:${port}/`;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "oase",
    projectName: "spa-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: port
    },

    // output: {
    //   publicPath: publicPath
    // },

    // plugins: [
    //   new ModuleFederationPlugin({
    //     name: "demo",
    //     filename: "remoteEntry.js",
    //     exposes: {
    //       "./Demo": "./src/oase-spa-mfe.js"
    //     },
    //     shared: packageJson.dependencies
    //   })
    // ]
  });
};
