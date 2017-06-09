var express = require('express');

var gulp = require('gulp');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('Marketing', ['Marketing_Student']);
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use('/', express.static('public'));
app.get('/getStudentList', function (req, res) {
    db.Marketing_Student.find(function (err, docs) {
//        console.log(docs);
        res.send(docs);
    });
});
app.post('/addstudent',function(req, res){
//   console.log(req.body);
    var id = Math.floor(Math.random()*10000);
    req.body.id = id;
    db.Marketing_Student.insert(req.body,function(err, docs){
        res.send("Added Succesfully");
    });
});

app.put('/deleteStudent/:id',function(req, res){
    console.log(req.params.id);
    var currentStudentId = Number(req.params.id);
console.log(typeof (currentStudentId));
    db.Marketing_Student.remove({"id":currentStudentId},function(err,data){
        console.log(err);
        console.log(data);
        if(data.ok){
            res.send("User deleted succesfully");
        }else{
            res.send("User can not be deleted succesfully");
        }
    });
});








gulp.task('express', function () {
    var server = app.listen(3000, function () {
        console.log("server started at 3000");
    });
});

gulp.task('default', ['express']);
