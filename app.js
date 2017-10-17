'use strict';

var express = require('express');
var app = express();
var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();

app.use(express.static(__dirname, {
	index: 'archieve-lab.html'
}));

app.listen(appEnv.port, function() {
	console.log("server starting on " + appEnv.url);
});
