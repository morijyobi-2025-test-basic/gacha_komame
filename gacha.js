const gacha = () => {
    const lucky = ['S', 'A', 'B', 'C'];
    const random = Math.floor(Math.random() * 4);
    return lucky[random];
}
module.exports = gacha;