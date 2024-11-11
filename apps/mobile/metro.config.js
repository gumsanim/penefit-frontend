const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // pnpm 설정을 위함
  resolver: {
    unstable_enableSymlinks: true, // symlinked dependencies
    unstable_enablePackageExports: true,
    extraNodeModules: {
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'), // pnpm 설정을 위함
    },
  },
  // pnpm 설정을 위함
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'), // pnpm 설정을 위함, root package들도 포함되게 보장
    path.resolve(__dirname, './node_modules'), // pnpm 설정을 위함
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
