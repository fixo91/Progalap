const sum = (a,b) => {
    return a + b;
};

const multiply = (a,b) => {
    return a * b;
};

const powerOf = (a,b) => {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
};

module.exports = {
    sum,
    multiply,
    powerOf
};