const request = require('request');
const fs=require('fs');
   
// 1
request('https://www.google.com/', (err, response, body)=>{
     
    if(err) return err;
    
    fs.writeFile('homePage.html',body, (err) =>{
        if(err) return err;
        console.log('Success');
    })  

}); 

// 2

request
  .get('http://www.africau.edu/images/default/sample.pdf')
  .on('error', (err)=> {
    console.error(err)
  })
  .pipe(fs.createWriteStream('Sample.pdf'));