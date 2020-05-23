var fs = require("fs"),
  parseString = require("xml2js").parseString,
  xml2js = require("xml2js");
 let versionCode;
 let versionName
 let version;
  fs.readFile("./version.xml","utf-8",function(err,data)
  {
  if(err)console.log(err);
  console.log(data);
  parseString(data,function(err,result) {   
    var json = result;
    console.log(json);
    json.version["versionCode"]=(parseFloat(json.version["versionCode"])+1)+"";
    json.version["versionName"]=(parseFloat(json.version["versionName"])+parseFloat(json.version["step"]))+"";   
    versionCode=parseFloat(json.version["versionCode"]);
    versionName=parseFloat(json.version["versionName"]);    
    var builder = new xml2js.Builder();
    version = builder.buildObject(json);    
  });
});
fs.readFile("./platforms/android/app/src/main/AndroidManifest.xml","utf-8",function(err,data)
{
  if (err) console.log(err);
  console.log(data);
  parseString(data, function(err,result) {   
    var json = result;
    console.log(json);
    json.manifest["$"]["android:versionCode"]=versionCode;
    json.manifest["$"]["android:versionName"]= versionName;   
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(json);
    
    fs.writeFile("./platforms/android/app/src/main/AndroidManifest.xml", xml, function(err, data) {
      if (err) console.log(err);
      console.log("successfully written our update xml to file");
    });
    fs.writeFile("./version.xml", version, function(err, data) {
        if (err) console.log(err);
        console.log("successfully written our update xml to file");
      });
  });
});