// 원래는 10개 정돆지밖에 되지 않지만 강제로 늘려줄 수 있다.
process.setMaxListeners(15);

// 리스너 제거
process.removeListener('이벤트 이름', 이벤트리스너);

// 이벤트를 한번만 연결
process.once('이벤트 이름', function(error){
    
})