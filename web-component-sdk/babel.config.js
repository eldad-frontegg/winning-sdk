module.exports = function getBabelConfig(api) {
    api.env(['stable', 'rollup']);

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false
            }
        ],
    ];

    return {
        presets,
    };
};
