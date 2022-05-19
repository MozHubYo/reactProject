import styled from 'styled-components/macro';
import { useState } from 'react';

const Container = styled.div`
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 製作輸入框組件
const InputColumn = ({ type, name, placeholder, onChange }) => (
  <Div>
    <Span>{type}</Span>
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  </Div>
);

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-content: flex-start;
  gap: 20px;
  flex: 8;
`;

const Div = styled.div`
  height: 50px;
  width: 20px;
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 5px;
`;

const Span = styled.span`
  display: block;
  color: #555;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid lightgray;
  height: 30px;
  width: 100%;
  font-family: 'Franklin Gothic Medium';
  font-weight: 300;
  font-size: 16px;
  color: #555;
  outline: none;
  &:not(:placeholder-shown) {
    border-bottom: 2px solid purple;
  }
  &::placeholder {
    color: lightgray;
    font-size: 14px;
  }
`;

// 製作按鈕組件
const SaveBnt = ({ check, data, text }) =>
  !check ? (
    <Bnt>{text}</Bnt>
  ) : (
    <Bnt
      disabled={Object.values(data).some((value) => value === '') && 'disabled'}
    >
      {text}
    </Bnt>
  );

const BntContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

const Bnt = styled.button`
  height: 100%;
  background-color: purple;
  color: white;
  padding: 0 20px;
  margin-right: 10px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  &:hover {
    background-color: rgb(228, 154, 228);
    color: purple;
  }
  &:disabled {
    background-color: gray;
    color: white;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: gray;
    color: white;
    cursor: not-allowed;
  }
`;

const InformationTab = () => {
  const [data, setData] = useState('');

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <InputColumn
          type={'Product Name'}
          name={'productName'}
          placeholder={'Amazing Product'}
        />
        <InputColumn type={'SKU'} name={'sku'} placeholder={'MOZ17824X'} />
        <InputColumn
          type={'Condition'}
          name={'condition'}
          placeholder={'New'}
        />
      </InputContainer>
      <BntContainer>
        <SaveBnt check={false} text={'Back to List'} />
        <SaveBnt check={true} data={data} text={'Save Change'} />
      </BntContainer>
    </Container>
  );
};

export default InformationTab;
