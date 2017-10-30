// var mysql = require('mysql');

// var conInfo = {
//   host : '127.0.0.1',  // 이거는 내부에서 사용할 때만 이렇게 사용함. 외부에서 접근할 때는 192.168... 같은 것을 쓰겠지
//   user : 'root',
//   password : 'mysql',
//   port : 3306,
//   database : 'bbs'
// }

// exports.getData = function(callback){


//   // 연결 객체를 담은 객체를 생성
//   var con = mysql.createConnection(conInfo);

//   // 연결정보를 이용해서 database 연결
//   // 이렇게 해 줌으로써 connection 파일과 데이터베이스와 연결해 주는 것;
//   // 아직 서버와는 연결되지 않았다.
//   con.connect();

//   // 쿼리 실행
//                                 // 노드는 전부 이벤트 기반의 비동기식 처리를 해 준다.
//   con.query('select * from board', function(err, items, fields){
//     // 에러체크
//     if(err){
//       console.log("error message="+err);
//     } else {
//       // 데이터 저장 배열 공간을 정의
//       var data = {
//         bbsList : []
//       };
//       // 반복문을 통해 배열에 item 을 하나씩 담는다
//       items.forEach(function(item){
//         data.bbsList.push(item);
//       });
//       var jsonString = JSON.stringify(data);
//       callback.end(jsonString);
//   }

//     //   console.log("data="+items);
//     //   items.forEach(function(item){ // item 은 내가 임의로 이름을 준 것이로군;
//     //     console.log(item);
//     //   });
//     // }
//     //바로 위에서 하준 일이 무엇인가
//     // for(Object item : items){
//     //
//     // }
//     this.end(); // 여기서 해주는 이유는 비동기 처리 때문에 속도가 빨라서 미리 end 해 버릴 수 있기 때문이다.
//   });

//   // con.end();

// }


var connection = require('./connection');

exports.getData = function(response){ // 함수를 파라미터로 넣어주는 것을 유심히 보면 이해할 수 있다.
  connection.select(function(data){

    var result = {
      bbsList : []
    }
    // 원본 데이터를 클라이언트 데이터 구조에 맞게 수정한다
    data.forEach(function(item){
      var newItem = {
        no : item.id,
        title : item.title,
        content : item.content,
        author : item.author,
        date : item.date
      }
      // 배열에 데이터 담기
      result.bbsList.push(newItem);

    });
    
    var jsonString = JSON.stringify(result);
    response.end(jsonString);
  })
}

exports.insert = function(data){

}

exports.update = function(data){

}

exports.remove = function(data){

}