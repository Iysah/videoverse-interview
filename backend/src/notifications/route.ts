import express from 'express'
import { getNotifications, updateNatificationStatus } from "./controller";


const router = express.Router()

// Authentication routes
router.get('/get-notifications', (req, res, next) => {
    getNotifications(req, res).catch(next);
});

router.post('/view-notification', updateNatificationStatus) 

export default router