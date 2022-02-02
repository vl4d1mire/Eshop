// Cannot load "react-refresh/babel" in production
const plugins = [];
if (process.env.NODE_ENV !== "production") {
    plugins.push("react-refresh/babel");
    plugins.push("@babel/plugin-proposal-class-properties")
    plugins.push(["@babel/transform-runtime"]);
}

module.exports = {
    presets: [
        "@babel/preset-env",
        // Runtime automatic with React 17+ allows not importing React
        // in files only using JSX (no state or React methods)
        ["@babel/preset-react", { runtime: "automatic"} ],
    ],
    plugins,
};
