import React, { useState } from 'react';
import './user.css';
import {
  AccountCircle,
  Cake,
  LocalPhone,
  Email,
  MyLocation,
  CloudUpload,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  const [data, setData] = useState({
    account: '',
    userName: '',
    phone: '',
    email: '',
    location: '',
  });

  function handleChange(e) {
    e.target.value.trim() === ''
      ? setData(
          (data) =>
            (data = {
              ...data,
              [e.target.name]: '',
            })
        )
      : setData(
          (data) =>
            (data = {
              ...data,
              [e.target.name]: e.target.value.trim(),
            })
        );
  }

  return (
    <div className="userPage">
      <div className="userPageTopBar">
        <h1 className="userPageTitle">User Management</h1>
        <div className="userPageEditButton">
          <Link to={'/users'}>
            <button className="userPageEditButtonItem">
              Back to List
              <span className="userPageEditButtonItemToolTip">
                All Changes will be Missed.
              </span>
            </button>
          </Link>
          <Link to={'/users'}>
            <button
              className="userPageEditButtonItem"
              disabled={
                Object.values(data).some((value) => value === '') && 'disabled'
              }
            >
              Save Change
              <span className="userPageEditButtonItemToolTip saveChange">
                Please Fill All required Columns
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="userPageDetailContainer">
        <div className="userPageDetailShow">
          <div className="userPageDetailShowTop">
            <img
              src="https://picsum.photos/300/300?random=990"
              alt=""
              className="userPageDetailShowTopImg"
            />
            <div className="userPageDetailShowTopProfile">
              <span className="userPageDetailShowTopProfileName">Moz Yen</span>
              <span className="userPageDetailShowTopProfileTitle">
                Soft Engineer
              </span>
            </div>
          </div>
          <div className="userPageDetailShowDown">
            <h3 className="userPageDetailShowDownTitle">Account Detail</h3>
            <ul className="userPageDetailShowDownList">
              <li className="userPageDetailShowDownItem">
                <AccountCircle className="userPageDetailShowDownIcon" />
                <span className="userPageDetailShowDownDate">Mazta333</span>
              </li>
              <li className="userPageDetailShowDownItem">
                <Cake className="userPageDetailShowDownIcon" />
                <span className="userPageDetailShowDownDate">12.13.1998</span>
              </li>
            </ul>
          </div>
          <div className="userPageDetailShowDown">
            <h3 className="userPageDetailShowDownTitle">Contact Detail</h3>
            <ul className="userPageDetailShowDownList">
              <li className="userPageDetailShowDownItem">
                <LocalPhone className="userPageDetailShowDownIcon" />
                <span className="userPageDetailShowDownDate">
                  +86 928 123 456
                </span>
              </li>
              <li className="userPageDetailShowDownItem">
                <Email className="userPageDetailShowDownIcon" />
                <span className="userPageDetailShowDownDate">
                  Mazta333@gmail.com
                </span>
              </li>
              <li className="userPageDetailShowDownItem">
                <MyLocation className="userPageDetailShowDownIcon" />
                <span className="userPageDetailShowDownDate">Taiwan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="userPageDetailUpdate">
          <div className="userPageDetailUpdateTop">
            <h3 className="userPageDetailUpdateTitle">
              Updated User Information
            </h3>
          </div>
          <div className="userPageDetailUpdateBottom">
            <div className="userPageDetailUpdateLeft">
              <form action="" className="userPageDetailUpdateForm">
                <div className="userPageDetailUpdateItemContainer">
                  <span className="userPageDetailUpdateItemTitle">
                    Account ID
                  </span>
                  <input
                    type="text"
                    className="userPageDetailItemInput"
                    placeholder="Mazta333"
                    name="account"
                    onChange={handleChange}
                  />
                  <div className="userPageDetailUpdateItemBorder"></div>
                </div>
                <div className="userPageDetailUpdateItemContainer">
                  <span className="userPageDetailUpdateItemTitle">
                    User Name
                  </span>
                  <input
                    type="text"
                    className="userPageDetailItemInput"
                    placeholder="Moz Yen"
                    name="userName"
                    onChange={handleChange}
                  />
                  <div className="userPageDetailUpdateItemBorder"></div>
                </div>
                <div className="userPageDetailUpdateItemContainer">
                  <span className="userPageDetailUpdateItemTitle">Phone</span>
                  <input
                    type="text"
                    className="userPageDetailItemInput"
                    placeholder="+86 928 123 456"
                    name="phone"
                    onChange={handleChange}
                  />
                  <div className="userPageDetailUpdateItemBorder"></div>
                </div>
                <div className="userPageDetailUpdateItemContainer">
                  <span className="userPageDetailUpdateItemTitle">E-mail</span>
                  <input
                    type="text"
                    className="userPageDetailItemInput"
                    placeholder="Mazta333@gmail.com"
                    name="email"
                    onChange={handleChange}
                  />
                  <div className="userPageDetailUpdateItemBorder"></div>
                </div>
                <div className="userPageDetailUpdateItemContainer">
                  <span className="userPageDetailUpdateItemTitle">
                    Location
                  </span>
                  <input
                    type="text"
                    className="userPageDetailItemInput"
                    placeholder="Taiwan"
                    name="location"
                    onChange={handleChange}
                  />
                  <div className="userPageDetailUpdateItemBorder"></div>
                </div>
              </form>
            </div>
            <div className="userPageDetailUpdateRight">
              <img
                src="https://picsum.photos/300/300?random=990"
                alt=""
                className="userPageDetailUpdateRightImg"
              />
              <input
                type="file"
                className="userPageDetailUpdateRightFile"
                id="file"
              />
              <label htmlFor="file">
                <CloudUpload className="userPageDetailUpdateRightIcon" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
