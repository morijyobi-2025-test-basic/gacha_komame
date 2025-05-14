const gacha = () => {
    return 'S'; 
}

const assert = require('assert');
for (let i = 0; i < 100; i++) {
    const result = gacha();
    assert.strictEqual(result, 'S', `失敗: ${i + 1}回目に '${result}' が出ました`);
}
