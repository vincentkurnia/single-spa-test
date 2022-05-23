const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const packageJson = require("./package.json");

const port = 8082;
// const publicPath = `http://localhost:${port}/`;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "oase",
    projectName: "navigation-mfe",
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
    //     name: "navigation",
    //     filename: "remoteEntry.js",
    //     exposes: {
    //       "./Navigation": "./src/oase-navigation-mfe.js"
    //     },
    //     shared: packageJson.dependencies
    //   })
    // ]
  });
};
