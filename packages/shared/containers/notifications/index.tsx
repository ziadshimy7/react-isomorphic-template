import { FC } from "react";

import { useNotificationsStore } from "@shared/external-stores/notifications";
import { Notification } from "@shared/ui/notification";

const NotificationContainer: FC = () => {
  const notifications = useNotificationsStore();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationContainer;
