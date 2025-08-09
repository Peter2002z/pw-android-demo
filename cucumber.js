module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require src/test/steps/**/*.ts",
    "--require src/test/support/hooks.ts",
    "--require src/test/support/mobile.world.ts",
    "src/test/features/ui/**/*.feature",
    "src/test/features/e2e/**/*.feature"
  ].join(" ")
};
