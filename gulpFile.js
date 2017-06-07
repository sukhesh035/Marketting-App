var express = require('express');

var gulp = require('gulp');

gulp.task('express', function() {
    var app = express();
    app.use('/', express.static('public'));
    
    var server = app.listen(3000, function() {
        console.log("server started at 3000");
    });
});

gulp.task('default', ['express']);