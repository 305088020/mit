// vue.config.js
module.exports = {
    // 输出文件目录
    baseUrl:'./',
    outputDir: 'docs,
    runtimeCompiler: true,
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#1d9faa',
            'link-color': '#1d9faa',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  }
