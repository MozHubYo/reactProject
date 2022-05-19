import React from 'react';
import './Topbar.css';
import { NotificationsNone, Settings, Language } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export function TopBar() {
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
          <Stack direction="row" className="topbarIconContainer">
            <IconButton>
              <Badge badgeContent={33} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="secondary">
                <Language />
              </Badge>
            </IconButton>
          </Stack>
          <Stack className="avatarImgContainer">
            <Avatar
              alt="MozYen"
              src="https://picsum.photos/300/300?random=300"
              sx={{ width: 40, height: 40 }}
              className="avatarImg"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
