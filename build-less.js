var fs = require("fs");
var less = require('less');
var path = require('path');

var cssDir = "dist\\static\\css";
var lessDir = "src\\static\\less";
 
fs.watch(lessDir, {}, function(event, filename) {
	var extension = path.extname(filename);

	var basename = path.basename(filename,extension);
	
	if (extension!=".less"){
		return;
	}

	console.log("compile file : " + filename + " " + new Date());
	
	var fileContent = fs.readFileSync(lessDir + "\\" + filename, { encoding:"utf8" });

	
	less.render(fileContent, {
				// compress: true,
				paths: [lessDir] 
				       
				}, function (e, output) {
					if (e){
						console.log(e);
						return;
					}
					
					var output_path = cssDir + "\\" + basename + ".css"
					// console.log(output.css);
					// fs.unlinkSync(output_path);
					
					fs.writeFileSync(output_path, output.css)

				});
	
});