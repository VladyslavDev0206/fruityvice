import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import { urlencoded } from "express";

import { initScheduledJobs } from "./scheduledFunctions/fetchFruits.js";

dotenv.config();
const app = express();

app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded());
app.use(router);

// Execute the cron job
initScheduledJobs();

app.listen(5000, () => console.log('Server running at port 5000'));