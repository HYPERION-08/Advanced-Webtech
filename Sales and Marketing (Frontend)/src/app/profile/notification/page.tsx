// 'use client';
// import React, { useState, useEffect } from 'react';

// interface Notification {
//   id: number;
//   content: string;
//   read: boolean;
//   createdAt: string;
// }

// const NotificationsPage: React.FC = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);

//   useEffect(() => {
//     const apiUrl = 'http://localhost:3001/notification';

//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (response.ok) {
//           const data = await response.json();
//           setNotifications(data);
//         } else {
//           console.error('Failed to fetch notifications');
//         }
//       } catch (error) {
//         console.error('An unexpected error occurred:', error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: '1' }}>
//         <h1>Your Notifications</h1>
//         <ul>
//           {notifications.map((notification) => (
//             <li key={notification.id}>
//               {notification.content} - {notification.createdAt}
//               {notification.read ? (
//                 <span style={{ marginLeft: '8px', color: 'green' }}>Message Read</span>
//               ) : (
//                 <span style={{ marginLeft: '8px', color: 'red' }}>Message Unread</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;

"use client";
import React, { useState, useEffect } from "react";

interface Notification {
  id: number;
  content: string;
  read: boolean;
  createdAt: string;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/notification";

    const fetchNotifications = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          console.error("Failed to fetch notifications");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    };

    fetchNotifications();
  }, []);

  const markNotificationAsRead = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3001/notification/${id}/read`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            read: true,
          }),
        }
      );

      if (response.ok) {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === id
              ? { ...notification, read: true }
              : notification
          )
        );
      } else {
        console.error("Failed to mark notification as read");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    // <div style={{ display: 'flex' }}>
    //   <div style={{ flex: '1' }}>
    //     <h1>Your Notifications</h1>
    //     <ul>
    //       {notifications.map((notification) => (
    //         <li key={notification.id}>
    //           {notification.content} - {notification.createdAt}
    //           {notification.read ? (
    //             <span style={{ marginLeft: '8px', color: 'green' }}>Message Read</span>
    //           ) : (
    //             <>
    //               <span style={{ marginLeft: '8px', color: 'red' }}>Message Unread</span>
    //               <button onClick={() => markNotificationAsRead(notification.id)}>Mark as Read</button>
    //             </>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <div>
      <h1 className="font-bold pr-2 border-b text-4xl font-bold mb-8 text-center p-5">
        Your Notifications
      </h1>
      <div className="flex justify-center">
        <table className="table-auto text-lg">
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td className="font-bold pr-2 border-b">
                  {notification.content}
                </td>
                <td className="border-b">{notification.createdAt}</td>
                <td className="border-b">
                  {notification.read ? (
                    <span className="text-red-500">Message Read</span>
                  ) : (
                    <span className="text-blue-500">Message Unread</span>
                  )}
                  {!notification.read && (
                    <button
                      className="ml-2 hover:underline bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationsPage;
