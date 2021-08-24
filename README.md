# 11ty_doc_builder
使用`Eleventy`构建的简单的文档/博客页面生成器。

该项目仅实现了主页、列表、查看和关于页，界面也没有精细设计，仅为`11ty`和`Nunjucks`的学习实验作品。

## 运行
需要提前安装`Node.js`以运行。

1. 使用`git clone`下载到本地。

2. 在程序根目录下执行
    ```
    npm install
    ```
    安装需要的依赖。
3. 在程序根目录下执行
    ```
    npm run start
    ```
    启动服务，访问提示的地址以查看效果。
4. 在`src/pages`目录下编写`Markdown`文档，保存之后会动态构建并刷新页面。

5. 可以使用
    ```
    npm run build
    ```
    命令，不启动服务的情况下生成静态页面到`dist`目录下，可以直接将生成的文件部署到服务器上。

## 原理
该项目使用`Eleventy`工具生成静态页面，并使用`Nunjucks`模板引擎布局，将`Markdown`文档生成可直接部署的纯静态页面（HTML），无需后端支持。

1. 项目结构
- `dist`: 生成的静态页面所在目录，可直接部署到Web服务器、CDN等。
- `src/_data`: Nunjunk的全局数据，JSON格式，可使用{{ 文件名 }}引用数据。
- `src/_includes/layouts`: 所有的布局模板文件，格式为.njk，可自行编写，然后在Markdown中应用模板。
- `src/pages`: 文档/博客文章的所在目录。该目录下的所有`Markdown`文件均被视为文章，构造时自动索引到“文档列表”中。
- `src/static`: 该目录保存静态资源，构造时会直接复制到`dist`目录下。

2. 特殊文件说明：
- `**.11tydata.json`: 局部数据，该文件表示的数据只会会在该目录下生效。
- `.eleventy.js`: `Eleventy`的配置脚本，配置方法可查看[https://www.11ty.dev/docs/config/](https://www.11ty.dev/docs/config/ "Configuration—Eleventy, a simpler static site generator.")

## 该项目需完成的功能
1. 主页等页面完善。
2. 列表页需添加分页功能。
3. 添加按类型查找功能。
4. 页面布局美化。
5. ...

## 参照
> 1. [Eleventy offcial page](https://www.11ty.dev/ "Eleventy is a simpler static site generator.")  
> 2. [Markdown Chinese Documents](http://markdown.p2hp.com/ "Markdown 中文网")
> 3. [Nunjucks Chinese Documents](https://nunjucks.bootcss.com/ "Nunjucks 中文文档")