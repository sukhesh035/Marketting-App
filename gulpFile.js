var express = require('express');

var gulp = require('gulp');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('Marketing', ['Marketing_Student']);
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

var collection;


MongoClient.connect('mongodb://sukhesh.nri:ABCabc123$@ds015334.mlab.com:15334/marketing', function (err, db) {
    if (err) throw err;
    collection = db.collection('marketing_student');
});





app.use(bodyParser.json());
app.use('/', express.static('public'));


app.get('/getStudentList', function (req, res) {
    var cursor = collection.find();
    var dataObj = [];

    //  var promyFunctionmise = new Promise(
    //    cursor.each(function(err,doc){
    //      console.log(doc);
    //      dataObj.push(doc);
    //    }
    //               ));

    //
    //  var p = new Promise((resolve, reject) => { 
    //   cursor.each(function(err,doc){
    //      dataObj.push(doc);
    //     console.log(doc);
    //    });
    //  });
    //
    //  p.then(function(){
    //    console.log("Success");
    //    console.log(dataObj);
    //  });

    return new Promise(function (resolve, reject) {
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                dataObj.push(doc);

            }
        });
        setTimeout(function () {
            res.send(dataObj);
        }, 500);

    });
});

//p();


app.post('/addstudent', function (req, res) {
    //   console.log(req.body);
    var id = Math.floor(Math.random() * 10000);
    req.body.id = id;
    collection.insert(req.body, function (err, docs) {
        res.send("Added Succesfully");
    });
});

app.put('/deleteStudent/:id', function (req, res) {
    console.log(req.params.id);
    var currentStudentId = Number(req.params.id);
    console.log(typeof (currentStudentId));
    collection.remove({
        "id": currentStudentId
    }, function (err, data) {
        console.log(err);
        console.log(data);
        if (data.ok) {
            res.send("User deleted succesfully");
        } else {
            res.send("User can not be deleted succesfully");
        }
    });
});
app.post('/addDetails/:id', function (req, res) {
    console.log("tanuj");
    console.log(req.body);
    //   console.log(req.body);
    //  var id = Math.floor(Math.random()*10000);
    //  req.body.id = id;
    collection.update({id:req.params.id},{$push:{clients:req.body}}, function (err, docs) {
        res.send("Added Succesfully");
    });
});
app.get('/getStudentDetails/:id', function (req, res) {
    console.log(req.params.id);
    var currentStudentId = Number(req.params.id);
    var cursor = collection.find({
        id: currentStudentId
    });
    var dataObj = [];
    return new Promise(function (resolve, reject) {
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                dataObj.push(doc);

            }
        });
        setTimeout(function () {
            console.log(dataObj);
            res.send(dataObj);
        }, 500);

    });


});

app.get('/getClient/:id', function (req, res) {
    console.log(req.params.id);
    var currentStudentId = Number(req.params.id);
    var cursor = collection.find({
        id: currentStudentId
    });
    var dataObj = {};
    return new Promise(function (resolve, reject) {
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                dataObj.doc;

            }
        });
        setTimeout(function () {
            console.log(dataObj);
            res.send(dataObj);
        }, 500);

    });


});

gulp.task('express', function () {
    var server = app.listen(3000, function () {
        console.log("server started at 3000");
    });
});

gulp.task('default', ['express']);
