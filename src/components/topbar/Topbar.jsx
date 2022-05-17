import React from 'react';
import './Topbar.css';
import { NotificationsNone, Settings, Language } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// https://picsum.photos/300/300?random=${num}

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <Link className="sidebarLink" to="/">
              Moz's Dashboard
            </Link>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">!</span>
          </div>
          <img
            className="topAvatar"
            src="https://picsum.photos/300/300?random=300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
