const mongoose  = require("mongoose");

const ConnectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.main_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
      });
    }
  } catch (err) {
  }
};
export default ConnectToDB