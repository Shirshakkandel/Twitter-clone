import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption.js";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitter" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explorer" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="BookmarkIcon" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Notifications" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}
export default Sidebar;
