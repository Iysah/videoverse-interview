import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions, MongooseOptions } from "mongoose";
import notificatiopnRoute from "./notifications/route";
import { insertNotifications } from "../src/model/notification.model";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; 

// (async () => {
//   try {
//     const insert = await insertNotifications()
//     console.log('insert', insert)
//   } catch (err) {
//     console.log(
//       `Unable to insert -`,
//       err
//     );
//   }
// })();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sample Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});


app.use("/api/v1/", notificatiopnRoute);

const MONGODB_URI = process.env.MONGODB_URI as string;
(async () => {
    try {
      mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
      console.log("Connected To Database - Initial Connection");
    } catch (err) {
      console.log(
        `Initial Distribution API Database connection error occurred -`,
        err
      );
    }
})();



// Start Server
app.listen(PORT, () => {
  console.log(`⁠🚀 Server is running on http://localhost:${PORT}`);
});