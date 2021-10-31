var log4js = require('log4js');
var logrotate = require('logrotator');

log4js.configure({
  appenders: {  SunshineInfoLog:  { type: 'file', filename: './Logs/SunshineInfo.log'}},
  categories:{ default : { appenders: ['SunshineInfoLog'], level: 'info' }}
          
});

var log = log4js.getLogger('SunshineInfoLog');

var rotator = logrotate.rotator;

// check file rotation every 1 sec, and rotate the file if its size exceeds 1 mb.

rotator.register('./Logs/SunshineInfoINfo.log', {schedule: '10m', size: '10m', compress: false, count: 10});

// console.log('rotator',rotator);

rotator.on('error', function(err) {
  console.log('oops, an error occured!');
});

// 'rotate' event is invoked whenever a registered file gets rotated
rotator.on('rotate', function(file) {
  console.log('file ' + file + ' was rotated!');
});

module.exports = log