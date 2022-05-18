import React from 'react';
import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { NewsButton, CardContentNew } from './styledComponent';
import SubRadarChart from './radarChart';
import SubCircularChart from './circularprogressbar';
import IpiIndicator from './ipi';

const Container = styled.div`
  flex: 7;
  margin: 0px 27px 10px 10px;
  border: 1px solid purple;
  box-shadow: 4px 4px 4px -1px purple;
  padding: 15px;
  padding-top: 0px;
`;

function TipsCard({ type, title, des }) {
  return (
    <Card variant="outlined" style={{ border: '1px solid #cfa2ac' }}>
      <CardContentNew>
        <Typography
          sx={{ fontSize: 10, fontWeight: 500 }}
          color="hotpink"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography
          sx={{ fontSize: 14, fontWeight: 600 }}
          color="purple"
          component="div"
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 10, fontWeight: 300 }} color="gray">
          {des}
        </Typography>
      </CardContentNew>
      <CardActions>
        <NewsButton>Learn Now</NewsButton>
      </CardActions>
    </Card>
  );
}

const TipsSubject = styled.h2`
  margin: 15px 0px 10px 0px;
  color: purple;
`;

const Tips = styled(Box)`
  display: flex;
  gap: 10px;
`;

const ChartContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ChartPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartTitle = styled.span`
  color: gray;
  margin: 10px auto;
`;

const Inventory = () => {
  return (
    <Container>
      <TipsSubject>Updated News</TipsSubject>
      <Tips>
        <TipsCard
          type={'Operation Tips'}
          title={'Improve the Operation...'}
          des={
            'Lorem ipsum dolor sit amet consectetur repellendus autem. Atque nulla exercitationem est qui repellat deleniti...'
          }
        />
        <TipsCard
          type={'Inventory Tips'}
          title={'Improve the Inventory...'}
          des={
            'Lorem ipsum dolor sit amet consectetur repellendus autem. Atque nulla exercitationem est qui repellat deleniti...'
          }
        />
        <TipsCard
          type={'In-Stock Tips'}
          title={'Improve the In-Stock...'}
          des={
            'Lorem ipsum dolor sit amet consectetur repellendus autem. Atque nulla exercitationem est qui repellat deleniti...'
          }
        />
        <TipsCard
          type={'Health Tips'}
          title={'Improve the Health Per...'}
          des={
            'Lorem ipsum dolor sit amet consectetur repellendus autem. Atque nulla exercitationem est qui repellat deleniti...'
          }
        />
      </Tips>
      <TipsSubject>Logistic Performance</TipsSubject>
      <ChartContainer>
        <ChartPage>
          <ChartTitle>MoM Index Trending</ChartTitle>
          <SubRadarChart />
        </ChartPage>
        <ChartPage>
          <ChartTitle>Delivery Metrics</ChartTitle>
          <SubCircularChart value={0.78} />
        </ChartPage>
        <ChartPage>
          <ChartTitle>Inventory Indicator</ChartTitle>
          <IpiIndicator />
        </ChartPage>
      </ChartContainer>
    </Container>
  );
};

export default Inventory;
