module.exports = {
  // Default lingui config
  // catalogs: [
  //   {
  //     path: "<rootDir>/locale/{locale}",
  //     include: ["<rootDir>"],
  //     exclude: ["**/node_modules/**"],
  //   },
  // ],
  // compileNamespace: "cjs",
  // extractBabelOptions: {},
  // compilerBabelOptions: {},
  // fallbackLocales: {},
  // format: "po",
  locales: ["en", "de"],
  // orderBy: "messageId",
  // pseudoLocale: "",
  // rootDir: ".",
  // runtimeConfigModule: ["@lingui/core", "i18n"],
  // sourceLocale: "",
  runtimeConfigModule: ["./lingui", "i18n"],
}
