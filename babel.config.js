module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Config': './src/Config',
          '@Database': './src/Database',
          '@Models': './src/Models',
          '@Modules': './src/Modules',
          '@Scenes': './src/Scenes',
          '@SystemEntities': './src/SystemEntities',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
