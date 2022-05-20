import styled from 'styled-components/macro';
import ProductInfoPage from './ProductInfoPage';
import InformationTab from './InformationTab';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {
  HelpOutlineOutlined,
  LocalOfferOutlined,
  ImageOutlined,
  AssistantPhotoOutlined,
} from '@mui/icons-material';

import { inputColumnsList } from '../../dummyData';

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
              variant="fullWidth"
              sx={{
                // Selected Option 標題改為紫色
                '.css-1nppm96-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                  color: 'purple',
                },
                // Option 標題預設值
                '.css-heg063-MuiTabs-flexContainer button': {
                  fontFamily: 'Source Sans Pro',
                  fontSize: '16px',
                  textTransform: 'none',
                  color: 'lightgray',
                },
                // 標題下方的指示條
                '.css-1aquho2-MuiTabs-indicator': {
                  backgroundColor: 'purple',
                },
              }}
            >
              <Tab
                icon={<HelpOutlineOutlined />}
                iconPosition="start"
                label="Information"
                {...a11yProps(0)}
              />
              <Tab
                icon={<LocalOfferOutlined />}
                iconPosition="start"
                label="Pricing"
                {...a11yProps(1)}
              />
              <Tab
                icon={<ImageOutlined />}
                iconPosition="start"
                label="Images"
                {...a11yProps(2)}
              />
              <Tab
                icon={<AssistantPhotoOutlined />}
                iconPosition="start"
                label="Others"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <InformationTab inputList={inputColumnsList} />
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
