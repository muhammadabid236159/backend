// ==========================================
// DAY 6: Events & Streams
// ==========================================

const fs = require('fs');
const path = require('path');
// 1. Built-in events module mangwaya
const EventEmitter = require('events');

// ==========================================
// PART 1: Events (Ghar ki Ghanti / Notification)
// ==========================================
console.log("=== PART 1: EventEmitter Practice ===");

// Naya event emitter banaya
const myEmitter = new EventEmitter();

// Step 1: Event ko Suno (Listener)
// "Jab bhi 'orderPlaced' ka event ho, ye function chalao"
myEmitter.on('orderPlaced', (orderId, customerName) => {
    console.log(`[Event Triggered] 🔔 Beep! Naya order aa gaya!`);
    console.log(`-> Order ID: ${orderId} | Customer: ${customerName}`);
    console.log(`-> Action: Kitchen ko notification bhej di!\n`);
});

// Step 2: Event ko Chalao (Emit)
// Real-world: Jab user checkout button dabata hai
console.log("Customer ne checkout button dabaya...");
myEmitter.emit('orderPlaced', 501, 'Muhammad Abid');


// ==========================================
// PART 2: Streams (Tukdon mein data parhna)
// ==========================================
console.log("=== PART 2: Streams Practice ===");

const sourceFile = path.join(__dirname, 'bigfile.txt');
const copyFile = path.join(__dirname, 'copy_bigfile.txt');

// Test ke liye aik text file banate hain
fs.writeFileSync(sourceFile, "Node.js Streams bohot fast hain! Yeh data chunks mein travel karta hai.\n".repeat(50));

// 1. createReadStream: File ko tukdon (chunks) mein parhta hai
const readStream = fs.createReadStream(sourceFile, {
    encoding: 'utf-8',
    highWaterMark: 256 // Ek waqt mein sirf 256 bytes ka chota tukda uthao (testing ke liye)
});

// 2. createWriteStream: File mein tukde likhta hai
const writeStream = fs.createWriteStream(copyFile);

let chunkCount = 0;

// Jab bhi naya tukda (chunk) tayar hota hai, 'data' event chalta hai
readStream.on('data', (chunk) => {
    chunkCount++;
    console.log(`-> Chunk #${chunkCount} aaya (${chunk.length} bytes)`);
});

// Jab saare tukde khatam ho jayein, 'end' event chalta hai
readStream.on('end', () => {
    console.log(`\n🎉 Poori file kamyabi se read ho gayi! Kul Chunks: ${chunkCount}`);
});

// 3. Sab se jadui cheez: PIPE
// ReadStream ka pipe WriteStream ke munh mein daal do (Direct Copy without high RAM)
readStream.pipe(writeStream);
