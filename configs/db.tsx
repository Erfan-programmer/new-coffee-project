const mongoose  = require("mongoose");

const ConnectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.main_URL , {
        serverSelectionTimeoutMS: 30000, // 30 ثانیه
        connectTimeoutMS: 30000, // 30 ثانیه
        socketTimeoutMS: 45000,  // 45 ثانیه
      });
    }
  } catch (err) {
  }
};
export default ConnectToDB