const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const path = require("path");

const domain = process.env.PRODUCTION_DOMAIN;

const ADS_PUB_PATH = "/s3_bucket/latest/ads/";
const MSGS_PUB_PATH = "/s3_bucket/latest/messages/";
const RULES_PUB_PATH = "/s3_bucket/latest/rules/";

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name].[contenthash].js",
    publicPath: "public",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        messages: `messages@${domain}${ADS_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        ads: `ads@${domain}${MSGS_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        rules: `rules@${domain}${RULES_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
