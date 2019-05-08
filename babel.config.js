module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:[
    "transform-vue-jsx",
    "@babel/plugin-transform-runtime",
    // 整体按需添加样式 在 'ant-design-vue' 包下面的"es"目录里
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }]
  ]
    
}
