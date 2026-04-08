const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..", "..");

const config = getDefaultConfig(projectRoot);

config.resolver = {
	...config.resolver,
	unstable_enableSymlinks: true,
	nodeModulesPaths: [
		path.join(projectRoot, "node_modules"),
		path.join(workspaceRoot, "node_modules"),
	],
};

config.watchFolders = Array.from(
	new Set([...(config.watchFolders || []), workspaceRoot])
);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
