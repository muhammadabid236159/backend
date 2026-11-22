// ==========================================
// DAY 4: Asynchronous Programming (Promises & async/await)
// ==========================================

// 1. Ek Function jo Promise return karta hai
// Real-world: Ye function samajhein Database se user nikal raha hai
function fetchUserFromDB(userId) {
    return new Promise((resolve, reject) => {
        console.log(`[Database] User ID ${userId} ko dhoonda ja raha hai...`);

        setTimeout(() => {
            // Farz karein agar ID valid hai toh data mil gaya
            if (userId === 101) {
                resolve({ id: 101, name: "Muhammad Abid", role: "Backend Developer" });
            } else {
                // Agar user nahi mila toh error throw karein
                reject(new Error("User database mein maujood nahi hai!"));
            }
        }, 1500); // 1.5 second ka delay
    });
}

// 2. Doosra Function (User ki posts lana)
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1: Node.js seekh raha hoon", "Post 2: Day 4 complete!"]);
        }, 1000);
    });
}

// ==========================================
// Modern Tarika: async / await with try/catch
// ==========================================
async function getUserProfile() {
    console.log("=== Start: Profile Loading ===");

    try {
        // Case 1: Sahi User ID (Success)
        const user = await fetchUserFromDB(101);
        console.log("-> User mil gaya:", user);

        const posts = await fetchUserPosts(user.id);
        console.log("-> User ki posts:", posts);

        console.log("\n=== Ab Galat ID Test Karte Hain ===");
        // Case 2: Galat User ID (Error aayega aur catch block chalega)
        await fetchUserFromDB(999);

    } catch (error) {
        // AI se code likhwate waqt try/catch sab se ahem hai!
        console.error("-> [Error Pakda Gaya]:", error.message);
    } finally {
        console.log("=== End: Request mukammal ho gayi ===");
    }
}

// Run karein
getUserProfile();
