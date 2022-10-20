module.exports = function getBabelConfig() {
  return {
    presets: [
      "@babel/preset-typescript",
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ],
      "@babel/preset-react"
    ],

  }
}
