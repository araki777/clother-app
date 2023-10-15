module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            "@src": "./src",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
