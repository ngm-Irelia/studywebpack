# studywebpack
studywebpack

## 安装

npm install webpack webpack-cli --save-dev


## loader 预处理
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install --save-dev csv-loader xml-loader

npm install --save-dev html-webpack-plugin
npm install clean-webpack-plugin --save-dev

###有问题 时  "babel-loader": "^7.1.5",
npm install --save-dev @babel/core
npm i -S react react-dom
npm i -D babel-loader babel-core
npm i -D babel-preset-react

npm i -D webpack-dev-server

### 使用 source map  config中设置
devtool: 'inline-source-map',

### 热替换
npm install --save-dev express webpack-dev-middleware
config中设置：   publicPath: '/'

### 生产环境构建
npm install --save-dev webpack-merge

npm install --save uglifyjs-webpack-plugin