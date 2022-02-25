const fs = require('fs');
const xml2js = require('xml2js');
    
 
function helperFn(path){ 

var parser = new xml2js.Parser();
fs.readFile(path, function(err, data) {
    parser.parseString(data, function (err, result) {
       /* fs.writeFile('Sample.json',JSON.stringify(result), (err) =>{
            if(err) return err;
            console.log('Success');
        }); */
         console.dir(JSON.stringify(result));
    });
});

}

console.dir(helperFn(__dirname + '/sample.xml'));