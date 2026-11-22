// ==========================================
// DAY 3: File System (fs) & Path Module
// ==========================================

const path = require('path');
// Modern Node.js mein hum 'fs/promises' use karte hain taake async/await chal sake
const fs = require('fs/promises');

async function fileOperations() {
    try {
        // 1. Path Module: Safe cross-platform file path banana
        // Windows par "\" hota hai, Linux par "/" hota hai. 
        // path.join har operating system ke mutabiq khud adjust karta hai.
        const filePath = path.join(__dirname, 'backend.txt');
        console.log("File ki location (Path):", filePath);

        // 2. File Write karna (Create / Overwrite)
        console.log("\n1. File likhi ja rahi hai...");
        await fs.writeFile(filePath, "Backend Course: Day 3 File System!\n");
        console.log("-> File kamyabi se ban gayi!");

        // 3. File mein mazeed data add karna (Append)
        console.log("\n2. File mein naya data add kiya ja raha hai...");
        await fs.appendFile(filePath, "Ye doosri line hai jo appendFile se aayi hai.\n");
        console.log("-> Naya text add ho gaya!");

        // 4. File Read karna
        console.log("\n3. File ka data read kiya ja raha hai...");
        // 'utf-8' dena zaroori hai, warna raw Buffer (bytes) milenge
        const content = await fs.readFile(filePath, 'utf-8');
        console.log("-> File ka Content:\n-------------------");
        console.log(content.trim());
        console.log("-------------------");

    } catch (error) {
        console.error("Koi masla aa gaya:", error.message);
    }
}

// Function call karein
fileOperations();
