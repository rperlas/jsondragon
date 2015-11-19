/* Jsondragon Library File
 * A module to create a pdf file containing node dependencies.
 */
var fs = require('graceful-fs');

exports.jsonGen = function (output, tail) {
   fs.appendFileSync('./output/output' + tail + '.json', '{' + '\n');
   fs.appendFileSync('./output/output' + tail + '.json', '  "name": "output",' + '\n');
   fs.appendFileSync('./output/output' + tail + '.json', '  "dependencies": {' + '\n');


   for (var x = 1; x < output.length - 3; x++) {

      var depName = output[x + 1].split(',')[0];
      var depVer = output[x + 1].split(',')[1];

      fs.appendFileSync ('./output/output' + tail + '.json', '    "' + depName + '"' + ': "' + depVer + '",\n');
   }

   var total = output[output.length - 2].split(',')[0];
   fs.appendFileSync('./output/output' + tail + '.json', '    "' + total + '": "*"\n');
   fs.appendFileSync('./output/output' + tail + '.json', '  }' + '\n' + '}');

}