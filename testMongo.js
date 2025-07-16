// testMongo.js (CommonJS version)
const mongoose = require("mongoose");

const run = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Test MongoDB Connected!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Connection Error:", error.message);
    process.exit(1);
  }
};

run();
