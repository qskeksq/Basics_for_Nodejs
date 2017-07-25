// 일반적으로 이벤트를 생성하는 부분과 연결하는 부분을 분리해 주기 때문에 이렇게 따로 외부 모듈로 빼 준 것이다.

// 커스텀 이벤트 생성 -- EventEmitter를 상속받아서 사용한다.
exports.timer = new process.EventEmitter();

// tick 이라는 이벤트를 강제로 발생시킨다.
setInterval(function () {
    exports.timer.emit('tick');
}, 1000);