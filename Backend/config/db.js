import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://reyan:vbnvbnVBN1@abuki.bg27l.mongodb.net/Abuki"
    );
    console.log("mongodb connected successfully")
  } catch (err) {
    console.log("couldn't connect to mongodb ", err.message);
  }
};

export default connect