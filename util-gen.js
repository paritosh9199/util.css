var fs = require("fs");


var util = "";
for(var i=1;i<=150;i++){
    util+=`.p-${i}{padding:${i}px}`
    util+=`.pt-${i}{padding-top:${i}px}`
    util+=`.pb-${i}{padding-bottom:${i}px}`
    util+=`.pl-${i}{padding-left:${i}px}`
    util+=`.pr-${i}{padding-right:${i}px}`
    
    util+=`.m-${i}{margin:${i}px}`
    util+=`.mt-${i}{margin-top:${i}px}`
    util+=`.mb-${i}{margin-bottom:${i}px}`
    util+=`.ml-${i}{margin-left:${i}px}`
    util+=`.mr-${i}{margin-right:${i}px}`
}
fs.writeFile("util.css", util, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});