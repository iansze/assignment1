const path = require("path");
//exports the directory name of the main entry file of a Node.js application
module.exports = path.dirname(require.main.filename);
