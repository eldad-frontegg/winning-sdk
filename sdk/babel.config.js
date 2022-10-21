module.exports = function getBabelConfig(api) {
    api.env(['stable', 'rollup']);

    const presets = [
        '@babel/preset-env',
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
