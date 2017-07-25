// 1. ��� ����
var express = require('express');

// 2.1 ���� ����
var app = express();

// 2.2 request �̺�Ʈ ������ ���
app.use(function (request, response) {

    // �迭�� ���� ���� �̷��� ����� �ִ±�
    var output = [];
    for (var i = 0; i < 10; i++) {
        // �迭�� �߰��ϱ�
        output.push({
            count: i,
            name: 'name : ' + i
        });
    }
    // statusCode �ƴ϶� status 
    response.status(200).send(output);

});

// 3. ���� ����
app.listen(8080, function () {
    console.log('server is running');
})
