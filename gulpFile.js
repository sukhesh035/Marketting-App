var express = require('express');

var gulp = require('gulp');
var fs = require('fs');

gulp.task('express', function () {
    var app = express();
    app.use('/', express.static('public'));
    //    app.get('/list',function(request,response){
    //        response.sendFile(__dirname + "/data/mockData.json");
    //    });
    var server = app.listen(3000, function () {
        console.log("server started at 3000");
    });
});

gulp.task('default', ['express']);
