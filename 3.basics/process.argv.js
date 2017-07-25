process.argv.forEach(function (value, index) {
    
    console.log(index + ':' + typeof value + ':' + value);

    if (value == '--exit') {

        var exitTime = Number(process.argv[index + 1]);

        setTimeout(function () {
            process.exit();
        }, exitTime);
    };

})
