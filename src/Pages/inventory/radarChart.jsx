import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'CTI',
    LM: 89,
    CM: 72,
    fullMark: 100,
  },
  {
    subject: 'ROI',
    LM: 74,
    CM: 93,
    fullMark: 100,
  },
  {
    subject: 'ACOS',
    LM: 24,
    CM: 32,
    fullMark: 100,
  },
  {
    subject: 'CTG',
    LM: 66,
    CM: 83,
    fullMark: 100,
  },
  {
    subject: 'CTC',
    LM: 12,
    CM: 42,
    fullMark: 100,
  },
];

export default function SubRadarChart() {
  return (
    <ResponsiveContainer>
      <RadarChart
        cx="50%"
        cy="55%"
        outerRadius="90%"
        data={data}
        width={200}
        height={200}
      >
        <PolarGrid polarRadius={[25, 50, 75]} />
        <PolarAngleAxis dataKey="subject" fontSize={10} fontWeight={200} />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          fontSize={8}
          fontWeight={100}
        />
        <Radar
          name="Last Month"
          dataKey="LM"
          stroke="hotpink"
          fill="pink"
          fillOpacity={0.6}
        />
        <Radar
          name="Current Month"
          dataKey="CM"
          stroke="purple"
          fill="purple"
          fillOpacity={0.6}
        />
        <Legend
          iconSize={5}
          iconType={'circle'}
          verticalAlign="bottom"
          wrapperStyle={{ fontSize: '10px' }}
          height={3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
