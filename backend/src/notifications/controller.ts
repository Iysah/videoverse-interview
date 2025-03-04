import { Request, Response } from 'express'
import Notification from "./../model/notification.model";

export const getNotifications = async (
    req: Request,
    res: Response,
  )=> {
  
    try {
    const page: any = req.query.page || 1; // Page number, default to 1
    const limit: any = req.query.limit || 50; // Documents per page, default to 10
    

    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    const notifications = await Notification.find()
      .sort({time: -1})
      .skip(skip)
      .limit(limit)
  
    const total = await Notification.countDocuments();

    const results = {
        totalItems: total,
        currentPage: page,
        totalPages: Math.ceil(total/ limit),
        data: notifications
    };
      
      return res
        .status(201)
        .json({ results});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateNatificationStatus = async (
    req: Request,
    res: Response,
  )=> {
    try {
    const id: any = req.body.id 
    const newSeenStatus = req.body.newSeenStatus
    
    const notification = await Notification.findOne({_id: id})

    if (notification) {
        notification.seen = newSeenStatus;
        await notification.save()
        res
        .status(201)
        .json({ message: 'Notification status successfully change'});
    }else{
        res
        .status(201)
        .json({ message: 'Unable to read notification'});
    }
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};