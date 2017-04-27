var stealTools = require("steal-tools");

stealTools.export({
	steal: {
		config: __dirname + "/package.json!npm"
	},
	outputs: {
		// Don't want to minify? Remove the +min bits
		"+cjs+min": {},
		"+amd+min": {},
		"+global-js+min": {}
	}
}, {
	min: {minify: true}
}).catch(function (error) {
	setTimeout(function () {
		throw error;
	}, 1);
});
