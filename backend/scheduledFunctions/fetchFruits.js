import fetchAndSaveFruits from "../utils/fetchAndSaveFruits.js";
import CronJob from "node-cron";

export const initScheduledJobs = () => {
  const scheduledJobFunction = CronJob.schedule("*/1 * * * *", () => {
    console.log("I'm executed on a schedule!");
    fetchAndSaveFruits();
  })

  scheduledJobFunction.start();
}