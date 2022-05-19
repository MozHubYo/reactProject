import styled from 'styled-components/macro';
import ProductInfoPage from './ProductInfoPage';
import InfoForm from './infoForm';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

const Container = styled.div`
  flex: 7;
  margin: 0px 27px 10px 10px;
  border: 1px solid purple;
  box-shadow: 4px 4px 4px -1px purple;
  display: flex;
  gap: 10px;
`;

const RightPage = styled.div`
  border: 1px solid purple;
  padding-top: 15px;
  flex: 140%;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Product = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <ProductInfoPage />
      <RightPage>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                '.css-heg063-MuiTabs-flexContainer': {
                  justifyContent: 'space-around',
                },
                '.css-heg063-MuiTabs-flexContainer button': {
                  fontFamily: 'Source Sans Pro',
                  fontSize: '18px',
                  textTransform: 'none',
                  color: 'lightgray',
                },
                '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                  color: 'purple',
                },
                '.css-1aquho2-MuiTabs-indicator': {
                  backgroundColor: 'purple',
                },
                '.css-19kzrtu': {
                  padding: '10px',
                },
              }}
            >
              <Tab label="Information" {...a11yProps(0)} />
              <Tab label="Pricing" {...a11yProps(1)} />
              <Tab label="Images" {...a11yProps(2)} />
              <Tab label="Others" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <InfoForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
        </Box>
      </RightPage>
    </Container>
  );
};

export default Product;
