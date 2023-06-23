module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        tests: ['./__tests__/'],
        extensions: ['.ios.ts', '.android.ts', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};
