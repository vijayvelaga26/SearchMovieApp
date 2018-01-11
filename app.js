var express= require("express");
var app = express();
var request= require("request");
app.set("view engine","ejs");
//var bodyParser= require("body-parser");
//app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.render("search");
})

app.get("/results",function(req,res){
    var search=req.query.name;
    var url = "http://www.omdbapi.com/?s=" + search + "&apikey=thewdb";
request(url, function(err,response,body){
    if(!err&& response.statusCode==200){
        var parsedData = JSON.parse(body); //console.log(parsedData);   
        res.render("results",{data:parsedData});   
    }
})
     
    
})




app.listen(8000,function(){
    console.log("The movie application is running on server 8000 !!!");
})