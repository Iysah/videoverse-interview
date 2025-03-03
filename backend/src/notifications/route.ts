import express from 'express'
import { getNotifications } from "./controller";


const router = express.Router()

// Authentication routes
router.get('/get-notifications', (req, res, next) => {
    getNotifications(req, res).catch(next);
});


export default router