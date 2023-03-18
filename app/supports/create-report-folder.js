var moment = require("moment");
var fse = require("fs-extra");

module.exports = {
    setup: function() {
        var reportDir = './report';//this.config.options.reportDir;
        if (fse.existsSync(reportDir)) {
            fse.moveSync(
               reportDir, 
               reportDir + "_" + moment().format("YYYYMMDD_HHmmss"),
               { overwrite: true}
            );
        }

        fse.mkdirsSync(reportDir);
    }
};