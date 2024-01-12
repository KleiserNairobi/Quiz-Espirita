module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@models': './src/models',
          '@pages': './src/pages',
          '@providers': './src/providers',
          '@quizes': './src/quizes',
          '@routes': './src/routes',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
