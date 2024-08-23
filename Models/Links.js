import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    Url: {
      type: String,
      require: true,
    },
    Uid:{
        type:Number,
        default:Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("Link", LinkSchema);