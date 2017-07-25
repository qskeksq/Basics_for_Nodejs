// 프로세스에 이벤트 등록
process.on('exit', function(code){
    console.log('adios...');
});

// 강세 이벤트 발생 -- 이벤트 리스너만 실행해준다.
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');


// 프로세스 실제 종료 이벤트 -- 그런데 얘는 굳이 호출해 주지 않아도 자동 호출되는 듯
process.exit();