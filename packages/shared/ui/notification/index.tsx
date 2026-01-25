import { FC, ReactNode } from "react";

import {
  notificationsStore,
  Notification as NotificationType,
} from "@shared/external-stores/notifications";

// import { IconButton } from "../button/icon-button";
// import { SuccessIcon } from "../icons/success";
// import { WarningIcon } from "../icons/warning";
import { IconButton } from "../icon-button";
import { BanIcon, CheckIcon, MailWarningIcon } from "lucide-react";

interface NotificationProps {
  notification: NotificationType;
}

const iconsVariants: Record<NotificationType["variant"], ReactNode> = {
  error: <BanIcon width={16} height={16} color="red" fill="red" />,
  success: <CheckIcon width={16} height={16} color="green" fill="green" />,
  warning: (
    <MailWarningIcon width={20} height={20} color="#aed61f" fill="#aed61f" />
  ),
  info: undefined,
};

const colorsVariants: Record<NotificationType["variant"], string | undefined> =
  {
    error: "red",
    success: "green",
    warning: "#aed61f",
    info: undefined,
  };

const handleRemoveNotification = (id: string) => () => {
  notificationsStore.actions.pop(id);
};

export const Notification: FC<NotificationProps> = ({
  notification: { variant, message, animationDuration, id },
}) => (
  <li className="relative flex w-80 items-center gap-3 rounded-lg bg-white p-4 shadow-md">
    <IconButton
      className="absolute right-3 top-2 !h-5 !w-5 cursor-pointer"
      onClick={handleRemoveNotification(id)}
    >
      <BanIcon width={20} height={20} color="gray" fill="gray" stroke="gray" />
    </IconButton>
    {iconsVariants[variant]}
    <p className="text-base">{message}</p>
    <div
      style={{
        backgroundColor: colorsVariants[variant],
        animationDuration,
      }}
      className="absolute bottom-0 mx-[-15px] my-0 h-1 w-full origin-left animate-progressBar rounded-xl"
    />
  </li>
);
