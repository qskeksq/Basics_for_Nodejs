var mongo = require("mongodb").MongoClient;

// 조회
exports.select = function(callback){                              // 에러, 내가 요청한 object
    // 데이터베이스 연결
    mongo.connect('mongodb://localhost:27017/bbs', function(err, db){
        if(err){
            console.log(err);
        } else {    
            // 1. board 테이블의 전체 데이터를 검색해서 가져온다
            var board = db.collection("board").find(); // 콘솔창에서 db.collection.find() 가 비슷한 것을 잘 비교해 보자
            // 2. toArray 함수로 배열로 만들어서 docs 변수에 담아준다
            board.toArray(function(error, docs){
                if(error){
                    console.log("error"+error);
                } else {
                    if(docs != null){
                        console.log(docs);
                        callback(docs);
                    }
                }
            });
            // var result = [];
            // cursor.each(function(error, doc){  //  아이템 하나하나의 단위를 document 라고 한다
            //     if(error){
            //         console.log(error);
            //     } else {
            //         // 조회한 데이터를 배열에 담아준다.
            //         if(doc != null)
            //             result.push(doc); // 배열에 넣어줄 때는 항상 push 를 사용하는군
            //     }
            // }); 
            callback(result);
            db.close();
        }
    });
}

// 추가
exports.insert = function(data, callback){
    // mongo db 에 연결하는 과정 -- 어제 해줬던 createConnection 과 connect 를 여기서는 connect 하나가 해결해줌
    // 포트가 27017 인 mongo db 로 연결해준다. 
    mongo.connect('mongodb://localhost:27017/bbs', function(err, db){
    // mongo.connect('mongodb://localhost:27017/bbs', function(err, db){ 여기서 bbs2 로 해주면 새로운 db 가 생김

        // 연결 에러 발생
        if(err){
            console.log(err);
        } else {
            console.log("connected:"+db);
            
            // 데이터 입력
            var data = {
                id : 1,
                title : "제목",
                content : "내용",
                author : "작성자",
                date : "2017-06-29 12:15:23"
            };
            // 공부를 위해 여기다 코딩을 해 놓긴 하는데 실제로는 function으로 따로 빼내준다.
                        // 테이블         데이터
            db.collection("board").insert(data);

            // 닫아주기
            db.close();
        }
    });
}
