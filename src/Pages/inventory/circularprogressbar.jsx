import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import styled from 'styled-components/macro';

const Tips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(LocalShippingIcon)`
  color: purple;
  font-size: 40px !important;
`;

const Percent = styled.strong`
  color: purple;
  font-size: 40px;
`;

const Des = styled.span`
  color: gray;
  font-size: 12px;
`;

export default function SubCircularChart({ value }) {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbarWithChildren
        value={value}
        maxValue={1}
        styles={buildStyles({
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          pathColor: `rgba(128,0,128, ${value})`,
          trailColor: '#faf1f3',
        })}
      >
        <Tips>
          <Icon />
          <Percent>{`${value * 100}%`}</Percent>
          <Des> on-time deliver</Des>
        </Tips>
      </CircularProgressbarWithChildren>
    </div>
  );
}
