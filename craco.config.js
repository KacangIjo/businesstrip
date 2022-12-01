const path = require('path');
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{
    plugin: CracoLessPlugin, 
    options: {
      lessLoaderOptions: {
        lessOptions: {
        },
          modifyVars: {
            "@primary-color": "#f14545",
            "@border-radius-base": "8px",
            "@link-color": "#f14545",
            "@link-hover-color": "#c41432",
            "@btn-border-radius-base":" 24px",
            "@btn-primary-color": "#fff",
            "@btn-primary-bg": "#f14545",
            "@layout-header-background": "#fff",
            "@form-item-margin-bottom": "10px",
            "@menu-highlight-color": "#f14545",
            "@tag-font-size":"12px",
            "@card-padding-base": "20px",
            "@card-shadow": "0 1px 3px 0 rgba(27, 27, 27, 0.1), 0 4px 8px 0 rgba(27, 27, 27, 0.1)",
            "@card-radius": "18px"
          },
          javascriptEnabled: true,
      },
    }, 
  }],
  webpack: {
    alias: {
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/assets/icons.js'),
      src: path.resolve(__dirname, './src'),
    },
  },
};
