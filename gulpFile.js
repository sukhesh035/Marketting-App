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
        console.log(docs);
        res.send(docs);
    });
});
app.post('/addstudent',function(req, res){
   console.log(req.body);
    db.Marketing_Student.insert(req.body,function(err, docs){
        
    });
});









gulp.task('express', function () {
    var server = app.listen(3000, function () {
        console.log("server started at 3000");
    });
});

gulp.task('default', ['express']);
