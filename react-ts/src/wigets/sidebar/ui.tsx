import { SidebarItem } from "@/shared/ui/sidebar-item";
import { SidebarItemProps } from "@/shared/ui/sidebar-item/ui";
import { Menu } from "antd";

export type SidebarProps = {
  items: SidebarItemProps[];
};

export const MySidebar = ({ items }: SidebarProps) => {
  return (
    <div className="container">
      {items.map(({ icon, title }) => (
        <SidebarItem icon={icon} title={title} />
      ))}
    </div>
  );
};

export const AntDMenu = Menu