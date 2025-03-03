import { Request, Response } from 'express'

const Notifications = [
    {
        id: 1,
        title: "Login Alert",
        description: "You approved a login from a new device",
        time: "2 minutes ago",
        type: "login",
        seen: true,
    },
    {
        id: 2,
        title: "New friend request",
        description: "You have a new friend requit from Samir",
        time: "2 minutes ago",
        type: "friend",
        seen: false,
    },
    {
        id: 3,
        title: "Group Message",
        description: "You have a new message from Ninja Dev's Group",
        time: "2 minutes ago",
        type: "message",
        seen: true,
    },
    {
        id: 4,
        title: "Post alert",
        description: "David posted a new article",
        time: "2 minutes ago",
        type: "post",
        seen: false,
    },
    {
        id: 5,
        title: "New message",
        description: "You have a new message from John Doe",
        time: "2 minutes ago",
        type: "message",
        seen: false,

    },
    {
        id: 6,
        title: "New friend request",
        description: "You have a new message from John Doe",
        time: "2 minutes ago",
        type: "friend",
        seen: true,
    },
    {
        id: 7,
        title: "Birthday Reminder",
        description: "Yusuf Iysah birthday was yesterday",
        time: "2 days ago",
        type: "birthday",
        seen: false,
    },
    {
        id: 8, 
        title: "Post alert",
        description: "BBC posted a video: 'Frozen planet' discovered ",
        time: 'yesterday',
        type: 'video',
        seen: true,
    }
]

export const getNotifications = async (
    req: Request,
    res: Response,
  )=> {
  
    try {
    const page: any = req.query.page || 1; // Page number, default to 1
    const limit: any = req.query.limit || 50; // Documents per page, default to 10
    

    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedResults = Notifications.slice(skip, endIndex);

    const results = {
        totalItems: Notifications.length,
        currentPage: page,
        totalPages: Math.ceil(Notifications.length / limit),
        data: paginatedResults
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
    
    const notification = Notifications.find(notification => notification.id === id);
    if (notification) {
        notification.seen = newSeenStatus;
        return res
        .status(201)
        .json({ message: 'Notification read'});
    }else{
        return res
        .status(201)
        .json({ message: 'Unable to read notification'});
    }
    
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};