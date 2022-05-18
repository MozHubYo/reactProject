import styled from 'styled-components/macro';

const Container = styled.div`
  margin-left: 20px;
  align-self: flex-start;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BarTitle = styled.span`
  display: inline-block;
  color: gray;
  margin-bottom: 6px;
  font-size: 12px;
`;

const Bar = styled.div`
  position: relative;
  width: 300%;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #f3a6a6 ${(props) => props.start || 33}%,
    lemonchiffon ${(props) => props.start || 33}%,
    lemonchiffon ${(props) => props.end || 66}%,
    #a1dba1 ${(props) => props.end || 66}%
  );
  height: 15px;
  margin-bottom: px;
  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: ${(props) => props.perc || 50}%;
    border: 4px solid transparent;
    border-top: 14px solid purple;
  }
`;

export default function IpiIndicator() {
  return (
    <Container>
      <div>
        <BarTitle> Positive Review</BarTitle>
        <Bar start={20} end={40} perc={30}></Bar>
      </div>
      <div>
        <BarTitle> Availability</BarTitle>
        <Bar start={60} end={90} perc={80}></Bar>
      </div>
      <div>
        <BarTitle> Findability</BarTitle>
        <Bar start={30} end={60} perc={15}></Bar>
      </div>
      <div>
        <BarTitle> Defective Rate</BarTitle>
        <Bar start={25} end={75} perc={65}></Bar>
      </div>
    </Container>
  );
}
