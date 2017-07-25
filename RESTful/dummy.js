// 더미 데이터베이스 구현
exports.DummyDB = function(){
    // 변수 선언
    var count = 1;
    var storage = [];
    var DummyDB = {};

    DummyDB.get = function(id){

        if(id){
            // 아이디가 String 값이면 숫자로 바꾸고 숫자이면 그냥 숫자 리턴
            id = (typeof id == 'string') ? Number(id) : id;

            // 저장소 전체를 돌면서
            for(var i in storage){
                // 아이디 값이 일치하면 하나를 리턴하고
                if(storage[i].id == id){
                    return storage[i];
                    // 그렇지 않으면 전체를 리턴한다
                } 
            }
        } else {
            return storage;
        }
    }

    DummyDB.insert = function(data){
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function(id){
        id = (typeof id == 'string') ? Number(id) : id;

        for(var i in storage){
            if(storage[i].id == id){
                storage.splice(i, 1);

                return true;
            }
        }

        return false;
    }

    return DummyDB;
}();