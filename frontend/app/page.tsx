"use client";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { notifications } from "@/data/data";
import axios from "axios";
import { Bell, Cake, DotSquare, Ellipsis, Grip, MessageCircleHeart, MessageSquareDot, MessagesSquare, ShieldAlert, UserPlus, UserRound, Video } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";


// the notification interface based on API response
interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  type: 'login' | 'friend' | 'message' | 'post' | 'birthday' | 'video'; // Add all possible types
  seen: boolean;
}


// the full API response structure (optional, for completeness)
interface ApiResponse {
  results: {
    totalItems: number;
    currentPage: string;
    totalPages: number;
    data: Notification[];
  };
}
export default function Home() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false); // State to control Popover

  // Handle notification click
  const handleNotificationClick = (notification: Notification) => {
    setOpen(false);
  };
  
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/get-notifications', {
          params: {
            page: 1,
            limit: 6
          }
        });
        console.log(response);
        
        setNotifications(response.data.results.data);
        setLoading(false);
      } catch (err) {
        // setError(err?.message);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-end items-center gap-2 mr-8 my-3">
      <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
        <Grip />
      </div>

      <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
       <MessageCircleHeart />
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
            <Bell color="#3357e8" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] mr-2">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl">Notifications</h3>
            <Ellipsis />
          </div>

          {/* Notifications categoeries  */}
          <div className="flex justify-between items-center gap-2 mt-3">
            <div className="flex justify-center item-center gap-2 mb-2.5">
              <div className="bg-blue-200 px-2.5 py-1 rounded-full">
                <h3 className="text-xl text-blue-500 font-semibold">All</h3>
              </div>

              <div className="py-1">
              <h3 className="text-xl font-semibold">Unread</h3>
              </div>
            </div>

            <div>
              <p>Mark all read</p>
            </div>
          </div>

          {notifications.map((notification) => (
            <div key={notification?.id} className="flex justify-between items-center mt-2.5 cursor-pointer" onClick={() => handleNotificationClick(notification)}>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
                  {notification?.type === "message" ? (
                    <MessagesSquare color="#008000" />
                  ) : notification?.type === "friend" ? (
                    <UserPlus />
                  ) : 
                    notification.type === "post" ? (
                      <MessageSquareDot />
                  ) : notification.type === "login" ? (
                    <ShieldAlert />
                  ) : notification.type === "birthday" ? (
                    <Cake color="#A020F0" />
                  ) : notification.type === "video" ? (
                    <Video color="#FF0000" />
                  ) : (
                    <Bell />
                  )}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold">{notification.title}</h3>
                  <p>{notification.description}</p>
                  <p className="text-[14px]">{notification.time}</p>
                </div>
              </div>
              {notification.seen ? (
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-blue-600" />
              )}
            </div>
          ))}
        </PopoverContent>
      </Popover>

      <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
        <UserRound />
      </div>
    </div>
  );
}
