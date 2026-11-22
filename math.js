// ==========================================
// math.js - Ye hamara Custom Module hai
// ==========================================

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Dusri files mein use karne ke liye export karna zaroori hai
module.exports = {
    add,
    multiply
};
