import React from 'react';
import './widgetSM.css';
import { Visibility } from '@mui/icons-material';

export default function WidgetSM() {
  return (
    <div className="widgetSM">
      <span className="widgetSMtitle">New Join Member</span>
      <ul className="widgetSMList">
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=500"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=501"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>{' '}
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=502"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>{' '}
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=503"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>{' '}
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=504"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=505"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            className="widgetSMImg"
            src="https://picsum.photos/300/300?random=506"
            alt=""
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName"> Moz Yen </span>
            <span className="widgetSMUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSMUserButton">
            <Visibility className="widgetSMUserIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
