// ==========================================
// project1.js - Hamara Main Application Engine
// ==========================================
const taskService = require('./taskService');

async function run() {
    console.log("==========================================");
    console.log("   🚀 Task Manager Engine Shuru Hua");
    console.log("==========================================\n");

    try {
        // 1. Naye Tasks Add Karna
        console.log("1. Naye Tasks Add Kar Rahe Hain...");
        const task1 = await taskService.addTask("Node.js Day 1 se Day 4 ke concepts revise karna");
        console.log("-> Task 1 Add Ho Gaya:", task1.title, `[ID: ${task1.id}]`);

        const task2 = await taskService.addTask("GitHub par code push karna");
        console.log("-> Task 2 Add Ho Gaya:", task2.title, `[ID: ${task2.id}]`);

        // 2. Saare Tasks Dekhna
        console.log("\n2. File Se Saare Tasks Parh Rahe Hain...");
        let allTasks = await taskService.getAllTasks();
        console.log("-> Kul Tasks:", allTasks.length);
        console.log(allTasks);

        // 3. ID Se Specific Task Dhoondna
        console.log(`\n3. Task ID (${task1.id}) Ko Dhoond Rahe Hain...`);
        const found = await taskService.getTaskById(task1.id);
        console.log("-> Task Mil Gaya:", found);

        // 4. Aik Task Delete Karna
        console.log(`\n4. Task ID (${task2.id}) Ko Delete Kar Rahe Hain...`);
        await taskService.deleteTask(task2.id);
        console.log("-> Task Delete Ho Gaya!");

        // 5. Final Check (Baad mein kitne bache)
        console.log("\n5. Delete Hone Ke Baad File Ka Data:");
        const remainingTasks = await taskService.getAllTasks();
        console.log(remainingTasks);

        // 6. Error Test (Aik aisi ID dhoondein jo exist nahi karti)
        console.log("\n6. Error Handling Test (Fake ID: 99999)...");
        await taskService.getTaskById(99999);

    } catch (error) {
        // Agar koi bhi masla aaye toh yahan pakda jayega
        console.error("-> [Masla Pakda Gaya]:", error.message);
    } finally {
        console.log("\n==========================================");
        console.log("   ✅ Sab Operations Mukammal Ho Gaye!");
        console.log("==========================================");
    }
}

// Application run karein
run();
