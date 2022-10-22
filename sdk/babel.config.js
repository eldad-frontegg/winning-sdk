module.exports = function getBabelConfig(api) {
    api.env(['stable', 'rollup']);

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false
            }
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
        '@babel/preset-typescript',
    ];

    return {
        presets,
    };
};
