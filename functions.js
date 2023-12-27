function pluarize(n, w0, w1, w2) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2
        } else {
            return w0
        }
    } else {
        return w0
    }
}

function getRandom(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRGB(a = 1) {
    return `rgba(${getRandom(256)}, ${getRandom(256)}, ${getRandom(256)}, ${a})`;
}