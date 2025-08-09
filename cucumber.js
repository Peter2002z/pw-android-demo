module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/test/steps/**/*.ts',
      'src/test/support/hooks.ts',
      'src/test/support/mobile.world.ts'
    ],
    paths: [
      'src/test/features/ui/**/*.feature',
      'src/test/features/e2e/**/*.feature'
    ],
    format: ['progress'],
    publishQuiet: true,
    worldParameters: {},
    parallel: 0,
    dryRun: false,
    failFast: false,
    retry: 0,
    defaultTimeout: 60000 // 60 giây cho mỗi step/hook
  }
};
