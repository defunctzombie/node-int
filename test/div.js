
var assert = require('assert');
var int = require('../');

test('div', function() {

    // sign
    assert.equal(int(-1).div(1)._s, 1);
    assert.equal(int(-1).div(-1)._s, 0);
    assert.equal(int(1).div(-1)._s, 1);

    assert.equal(int(100).div(2), 50);

    assert.equal(int(99).div(3), 33);
    assert.equal(int(99).div(33), 3);
    assert.equal(int(90).div(33), 2);
    assert.equal(int(901).div(333), 2);

    assert.equal(int(12).div(4), 3);

    assert.equal(int(1234567890).div(4), '308641972');
    assert.equal(int(890).div(4), '222');
    assert.equal(int(1234).div(4), '308');

    assert.equal(int('600536865543890090554497953596609').div(8), '75067108192986261319312244199576');

    assert.equal(int(6609).div(81), 81);
    assert.equal(int(6609).div(88), 75);
    assert.equal(int(6609).div(86), 76);

    assert.equal(int(6609).div(71), 93);
    assert.equal(int(6609).div(78), 84);
    assert.equal(int(6609).div(76), 86);

    assert.equal(int(6609).div(811), 8);
});
