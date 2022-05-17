import React from 'react';
import './featureInfo.css';
import { ThumbDownAlt } from '@mui/icons-material';

export default function FeatureInfo({ title, actual, mom }) {
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{actual}</span>
        <span className="featuredChange">
          {mom}
          <ThumbDownAlt className="featuredIcon" />
        </span>
      </div>
      <span className="featuredSubtitle">Compared to last month</span>
    </div>
  );
}
