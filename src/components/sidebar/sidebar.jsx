import React from 'react';
import './sidebar.css';
import {
  SummarizeOutlined,
  Timeline,
  AttachMoney,
  ShoppingCart,
  AirportShuttle,
  FilterTiltShift,
  PermContactCalendar,
  Help,
  AccessibilityNew,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SummarizeOutlined className="sidebarIcon" />
              <Link className="sidebarLink" to="/">
                Summary
              </Link>
            </li>
            <Link className="sidebarLink" to="/inventory">
              <li className="sidebarListItem">
                <AirportShuttle className="sidebarIcon" />
                Inventory
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Salse
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Portal</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FilterTiltShift className="sidebarIcon" />
              <Link className="sidebarLink" to="/users">
                Customers
              </Link>
            </li>
            <li className="sidebarListItem ">
              <ShoppingCart className="sidebarIcon" />
              <Link className="sidebarLink" to="/productList">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Help</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermContactCalendar className="sidebarIcon" />
              Contact
            </li>
            <li className="sidebarListItem">
              <Help className="sidebarIcon" />
              Support
            </li>
            <li className="sidebarListItem">
              <AccessibilityNew className="sidebarIcon" />
              Join Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
