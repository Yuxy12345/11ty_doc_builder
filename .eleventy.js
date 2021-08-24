module.exports = eleventyConfig => {
    // 复制静态文件目录
    eleventyConfig.addPassthroughCopy("src/static/css");
    eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist");

    // 定义日期格式化方法
    Date.prototype.format = function(fmt) {
        var o = {
           "M+": this.getMonth() + 1,                   // 月份
           "d+": this.getDate(),                        // 日
           "h+": this.getHours(),                       // 小时
           "m+": this.getMinutes(),                     // 分
           "s+": this.getSeconds(),                     // 秒
           "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
           "S" : this.getMilliseconds()                 // 毫秒
        };
   
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
   
        for (var k in o) {
            if (new RegExp("("+ k +")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00"+ o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    // 自定义 Nunjunks 过滤器
    eleventyConfig.addNunjucksFilter('dateFilter', function(date) {
        return date.format('yyyy-MM-dd');
    });

    return {
        // 目录设置
        dir: {
            // 源文件的目录
            input: 'src',
            // 输出文件目录
            output: 'dist',
        },
        // markdown模板引擎为Nunjucks，可以在.md文件中使用nunjunks语法
        markdownTemplateEngine: 'njk'
    }
}