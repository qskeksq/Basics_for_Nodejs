var mysql = require('mysql');

// mysql 데이터베이스 연결할 때 필요한 정보
var connectionInfo = {
    user : 'root',
    password : 'mysql',
    database : 'company'
}

// 데이터베이 연결
var client = mysql.createConnection(connectionInfo);

// 데이터베이스 쿼리
// client.query('use company');  connectionInfo 에 미리 추가해 줄 수 있다.      
// 오류, 결과값
client.query('select * from products', function(error, result, fields){
    if(error){
        console.log('Error');
    } else {
        console.log(result);
    }
})

