import { ReactNode } from "react";

import "./ui.module.css";

export type SidebarItemProps = {
  icon: ReactNode;
  title: string;
};

export const MySidebarItem = ({ icon, title }: SidebarItemProps) => {
  return (
    <div className="item">
      {icon}
      <s className="title">{title}</s>
    </div>
  );
};
