import styled from 'styled-components/macro';
import { useState } from 'react';

const Container = styled.div`
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 製作輸入框組件
const InputColumn = ({ type, name, value, placeholder, handleChange }) => (
  <Div>
    <Span>{type}</Span>
    <Input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onblur={() => (this.value = '')}
    />
    <Border />
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
  border-bottom: 2px solid purple;
  height: 30px;
  width: 100%;
  font-family: 'Franklin Gothic Medium';
  font-weight: 300;
  font-size: 16px;
  color: #555;
  outline: none;
  z-index: 1;
  &::placeholder {
    color: lightgray;
    font-size: 14px;
  }
  &:placeholder-shown {
    border-bottom: 2px solid lightgray;
  }
  &:focus {
    border-bottom: 2px solid purple;
    z-index: 2;
  }
`;

const Border = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  width: 102%;
  top: calc(100% - 2px);
  background: purple;
  transform: scaleX(0);
  transition: transform 0.5s;
  transform-origin: 0%;
  z-index: 1;
  ${Div}:hover & {
    transform: scaleX(1);
  }
`;

// 製作按鈕組件
const SaveBnt = ({ disabled, text, handleClick }) => (
  <Bnt disabled={disabled && 'disabled'} onClick={handleClick}>
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
  width: 200px;
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

const InformationTab = ({ inputList }) => {
  const initialState = inputList.reduce(
    // 下面用到了comma operator，利用逗號運算符 => 由左至右完成運算，返回最後一個值
    // 下方是一個實際案例，我們希望把 X依序 乘5->減3->除2->加4，通過逗號運算符就能一行完成
    //     let x = 1;
    //      x = (x*5, x-3, x/2, x+4);  由左至右依次執行，最後一個值會被返回
    //      console.log(x)  x為5 == (x*5-3)/2+4
    (obj, item) => ((obj[item.name] = ''), obj),
    {}
  );

  const [productState, setProductState] = useState(initialState);

  const initialPlaceholder = inputList.reduce(
    (obj, item) => ((obj[item.name] = item.placeholder), obj),
    {}
  );

  const [productPlaceholder, setProductPlaceholder] =
    useState(initialPlaceholder);

  function handleChange(e) {
    const newProductState = {
      ...productState,
      [e.target.name]: e.target.value,
    };
    setProductState(newProductState);
  }

  function handleReset() {
    setProductState(initialState);
  }

  function handleASave(e) {
    setProductPlaceholder(productState);
    setProductState(initialState);
  }

  return (
    <Container>
      <InputContainer>
        {inputList.map((input) => (
          <InputColumn
            type={input.type}
            name={input.name}
            value={productState[input.name]}
            placeholder={productPlaceholder[input.name]}
            handleChange={handleChange}
          />
        ))}
      </InputContainer>
      <BntContainer>
        <SaveBnt text={'Reset'} handleClick={handleReset} />
        <SaveBnt
          disabled={Object.values(productState).some((value) => value === '')}
          text={'Save Change'}
          handleClick={handleASave}
        />
      </BntContainer>
    </Container>
  );
};

export default InformationTab;
