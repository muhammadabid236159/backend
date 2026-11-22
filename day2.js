// ==========================================
// DAY 2: Modules & Require Practice
// ==========================================

// 1. Built-in Module use karna (os = Operating System info)
// Isko install karne ki zaroorat nahi hoti, ye Node.js ke sath aata hai
const os = require('os');

// 2. Local Custom Module use karna (math.js jo humne khud banaya)
// Note: Apni file ke liye './' lagana zaroori hai!
const math = require('./math');

console.log("=== Built-in Module (OS) Example ===");
console.log("Operating System Platform:", os.platform());
console.log("Total RAM (in GB):", (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB");
console.log("Free RAM (in GB):", (os.freemem() / (1024 ** 3)).toFixed(2) + " GB");

console.log("\n=== Custom Module (math.js) Example ===");
const sum = math.add(15, 25);
const product = math.multiply(6, 7);

console.log("15 + 25 =", sum);
console.log("6 * 7 =", product);
