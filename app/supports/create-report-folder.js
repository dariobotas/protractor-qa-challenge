var moment = require("moment");
var fse = require("fs-extra");

module.exports = {
    setup: function() {
        var reportDir = './reports/json_report';
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