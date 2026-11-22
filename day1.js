// ==========================================
// DAY 1: Node.js Non-Blocking I/O & Event Loop
// ==========================================

console.log("1. [Main Thread] Request aayi: Customer 1 ka order liya.");

// Timer / Async task (Background mein chala jayega)
// Ye simulate kar raha hai ke database se data aane mein 2 second lagenge
setTimeout(() => {
    console.log("3. [Event Loop & Queue] Khana tayar ho gaya (Database se data aa gaya 2 sec baad)!");
}, 2000);

console.log("2. [Main Thread] Waiter ruka nahi, foran agle Customer ka order liya!");

// ==========================================
// Chhota sa test (0 millisecond timer)
// Dekhein chahe 0 millisecond bhi ho, ye Background -> Queue mein hi jayega!
// ==========================================
setTimeout(() => {
    console.log("4. [Event Loop & Queue] 0ms timer wala kaam execute hua (Main thread free hone ke baad).");
}, 0);

console.log("5. [Main Thread] Script ka aakhri line chal gaya. Ab Main Thread free ho raha hai...");
