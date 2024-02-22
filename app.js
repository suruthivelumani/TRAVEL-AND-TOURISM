const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/enquireDB");
var enquire = new mongoose.Schema({
     Name : String,
     Email: String,
     Phone: String
});
app.get("/",function(req,res){
   res.sendFile(__dirname + "/enquire.html");
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.post("/",function(req,res){
     var name = req.body.visitor_name;
     var email = req.body.visitor_email;
     var phone = req.body.visitor_phone;
     var adult = req.body.total_adults;
     var child = req.body.total_children;
     var inDate = req.body.checkin;
     var outDate = req.body.checkout;
     var room = req.body.room_preference;
     var message = req.body.visitor_message;
     console.log(name);
     console.log(email);
     console.log(phone);
     console.log(adult);
     console.log(child);
     console.log(inDate);
     console.log(outDate);
     console.log(room);
     console.log(room);
});
app.listen(3000);