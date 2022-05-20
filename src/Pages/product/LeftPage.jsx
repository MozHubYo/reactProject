import styled from 'styled-components/macro';
import {
  CloudUpload,
  DateRangeOutlined,
  UpdateOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

const LeftPage = styled.div`
  padding: 0px 15px;
  flex: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  color: purple;
  font-size: 45px;
  margin: 0px auto;
`;

const ImgContainer = styled.div`
  height: 350px;
  width: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border: purple 2px solid;
  border-radius: 15px;
  object-fit: cover;
  object-position: 50% 25%;
`;

const ImgInput = styled.input`
  display: none;
`;

const ImgLabel = styled.label`
  position: absolute;
  right: 15px;
  bottom: 10px;
  color: purple;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #ffffffb9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    color: white;
    background-color: purple;
  }
`;

const ImgIcon = styled(CloudUpload)`
  height: 35px;
  width: 35px;
`;

// 產品 - 左下角頁面 - 產品詳述區塊
const Description = ({ type, value, icon }) => (
  <DesStyled>
    <DesStyledDiv>
      {icon}
      {type}
      {' : '}
    </DesStyledDiv>
    <div>{value}</div>
  </DesStyled>
);

const DesStyled = styled.div`
  color: gray;
  width: 80%;
  /* margin-left: -40px; */
  display: flex;
  justify-content: space-between;
  gap: 25px;
  cursor: default;
`;

const DesStyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductInfoPage = () => {
  const [file, setFile] = useState('');

  return (
    <LeftPage>
      <Title>MOZ17824X</Title>
      <ImgContainer>
        <Img
          src={
            file !== ''
              ? window.URL.createObjectURL(file)
              : 'https://picsum.photos/300/300?random=890'
          }
          alt=""
        />
        <ImgInput
          type="file"
          id="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <ImgLabel htmlFor="file">
          <ImgIcon />
        </ImgLabel>
      </ImgContainer>
      <Description
        type={'Created Time'}
        value={'12.13.1989'}
        icon={<DateRangeOutlined />}
      />
      <Description
        type={'Last Updated'}
        value={'12.13.1989'}
        icon={<UpdateOutlined />}
      />
      <Description
        type={'Created by'}
        value={'Moz Yen'}
        icon={<AccountCircleOutlined />}
      />
    </LeftPage>
  );
};

export default ProductInfoPage;
