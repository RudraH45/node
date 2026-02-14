const fs = require('fs');   

const command = process.argv[2];

if(command === "write") {
    fs.writeFile("data.txt", "Hello, this is a test file.", (err) => {
        if(err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("File written successfully.");
        }
});
} else
if(command === "read") {
    fs.readFile("data.txt", "utf-8", (err, data) => {
        if(err) return console.error("Error reading file:", err);
        console.log("File contents:", data);
    });
} else
if(command === "delete") {
    fs.unlink("data.txt", (err) => {
        if(err) return console.log("Error deleting file:", err);
        console.log("File deleted successfully.");
    })
} else
if(command === "append") {
    fs.appendFile("data.txt", "\nNew Line Added.", (err) => {
        if(err) return console.log("Error appending to file:", err);
        console.log("File apppend successfully")
})
} else {
    console.log("Unknown command. Use 'write', 'read', 'delete', or 'append'.");
}

