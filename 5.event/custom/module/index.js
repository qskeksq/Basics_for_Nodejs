// �Ϲ������� �̺�Ʈ�� �����ϴ� �κа� �����ϴ� �κ��� �и��� �ֱ� ������ �̷��� ���� �ܺ� ���� �� �� ���̴�.

// Ŀ���� �̺�Ʈ ���� -- EventEmitter�� ��ӹ޾Ƽ� ����Ѵ�.
exports.timer = new process.EventEmitter();

// tick �̶�� �̺�Ʈ�� ������ �߻���Ų��.
setInterval(function () {
    exports.timer.emit('tick');
}, 1000);