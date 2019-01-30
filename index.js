const fs = require('fs');
const XLSX = require('xlsx')

var workbook = XLSX.readFile('mapp.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

fs.writeFile('contexts.json', JSON.stringify(xlData), function(err) {
    if (err) {
        return console.log("Error in file writing")
    }
    console.log("File saved successfully")
});
