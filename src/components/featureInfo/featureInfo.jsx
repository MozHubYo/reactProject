import React from 'react';
import './featureInfo.css';
import { ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';

export default function FeatureInfo({ title, actual, mom }) {
  let icon = '';
  if (mom > 0 && title !== 'Cost') {
    icon = <ThumbUpAlt className="featuredIconUP" />;
  } else if (mom < 0 && title === 'Cost') {
    icon = <ThumbUpAlt className="featuredIconUP" />;
  } else {
    icon = <ThumbDownAlt className="featuredIconDown" />;
  }

  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{actual}</span>
        <span className="featuredChange">
          {`${mom}%`} {icon}
        </span>
      </div>
      <span className="featuredSubtitle">Compared to last month</span>
    </div>
  );
}
