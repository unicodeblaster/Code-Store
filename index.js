import express from "express";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
import bodyParser from "body-parser";

import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// import routes
import Routes from "./routes/send.js";

dotenv.config();
const port = process.env.PORT || 3001;
const Uri = process.env.MONGO_URL;

const connect = () => {
  mongoose
    .connect(Uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected.."))
    .catch((err) => console.error(err));
};

// Routes
app.use("/api/", Routes);

// 3: step heroku
// Deployment 

// app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   })


app.listen(port, () => {
  connect();
  console.log(`Server is running on ${port}`);
});

export default app;
