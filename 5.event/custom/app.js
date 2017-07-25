var rint = require('./module');

rint.timer.on('tick', function () {
    console.log('execute event');
});