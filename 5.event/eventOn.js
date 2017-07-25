process.on('exit', function (code) {
    console.log('adios...');
});

var onUncaughtException = function (error) {
    console.log('close eyes');

    // 리스너 제거 -- 프로세스에 등록해 놓았던 uncaughtException 리스너 해제한다. 따라서 더 이상 close eyes 해 주지 않는다
    process.removeListener('uncaughtException', onUncaughtException);
}

process.on('uncaughtException', onUncaughtException);

var count = 0;
var test = function () {

    count = count + 1;
    if (count > 3) { return };

    // 2초 후에 실행, 계속해서 반복하다가 3이 넘어가면 멈춘다.
    setTimeout(test, 2000);
    // 강제로 예외를 발생시키면 위에서 등록한 이벤트가 실행된다
    error.error.error();
};

// 2초 후에 함수 실행
setTimeout(test, 2000);