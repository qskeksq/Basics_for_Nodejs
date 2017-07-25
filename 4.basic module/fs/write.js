var fs = require('fs');

var data = 'Hello world...';

// �����̱� ������ �ݹ� �Լ��� �޾��� �ʿ� ����
fs.writeFileSync('writeTextASync.txt', data);

// ���� ����� try catch �� File IO ���� ó�� ���ش�.
try{
    console.log('sync complete');
} catch(e) {
    console.log(e);
}


// �񵿱��̱� ������ �ݹ� �Լ��� �޾��ִ� ����. �򰥸��� �� ��!!
fs.writeFile('writeTextSync.txt', data, 'utf8', function (error) {  // �񵿱� ����� �������� ù ���ڷ� ���´�

    // ���� ���Ͻ����� ���� ó��
    if (error) { return console.log(error); }

    console.log('async complete');

});