import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the interface for the State document
export interface INotification extends Document {
  title: string;
  description: string;
  time: Date;
  type: string;
  seen: boolean;
}

const NotificationSchema: Schema<INotification> = new Schema(
    {
        title: { type: String },
        description: { type: String },
        time: { type: Date, default: Date.now, },
        type: { type: String },
        seen: { type: Boolean, default: false },
    },
    { timestamps: true },
);

// Create the model
const Notification: Model<INotification> = mongoose.model<INotification>('Notification', NotificationSchema);

export default Notification;

const Notifications:  Partial<INotification>[] = [
    {
        title: "Login Alert",
        description: "You approved a login from a new device",
        type: "login",
        seen: true,
    },
    {
        title: "New friend request",
        description: "You have a new friend requit from Samir",
        type: "friend",
        seen: false,
    },
    {
        title: "Group Message",
        description: "You have a new message from Ninja Dev's Group",
        type: "message",
        seen: true,
    },
    {
        title: "Post alert",
        description: "David posted a new article",
        type: "post",
        seen: false,
    },
    {
        title: "New message",
        description: "You have a new message from John Doe",
        type: "message",
        seen: false,

    },
    {
        title: "New friend request",
        description: "You have a new message from John Doe",
        type: "friend",
        seen: true,
    },
    {
        title: "Birthday Reminder",
        description: "Yusuf Iysah birthday was yesterday",
        type: "birthday",
        seen: false,
    },
    {
        title: "Post alert",
        description: "BBC posted a video: 'Frozen planet' discovered ",
        type: 'video',
        seen: true,
    }
]


export async function insertNotifications() {
    try {
      const result = await Notification.insertMany(Notifications);
      console.log('Notifications inserted:', result);
      return result
    } catch (error) {
      console.error('Error inserting notifications:', error);
    }
  }