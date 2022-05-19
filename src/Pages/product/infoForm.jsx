import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;

const FormContainer = styled.form``;

const BntContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const InfoForm = () => {
  const [data, setData] = useState({
    account: '',
    userName: '',
    phone: '',
    email: '',
    location: '',
  });

  function handleChange(e) {
    e.target.value.trim() === ''
      ? setData(
          (data) =>
            (data = {
              ...data,
              [e.target.name]: '',
            })
        )
      : setData(
          (data) =>
            (data = {
              ...data,
              [e.target.name]: e.target.value.trim(),
            })
        );
  }

  return (
    <Container>
      <FormContainer action="" className="userPageDetailUpdateForm">
        <div className="userPageDetailUpdateItemContainer">
          <span className="userPageDetailUpdateItemTitle">Account ID</span>
          <input
            type="text"
            className="userPageDetailItemInput"
            placeholder="Mazta333"
            name="account"
            onChange={handleChange}
          />
          <div className="userPageDetailUpdateItemBorder"></div>
        </div>
        <div className="userPageDetailUpdateItemContainer">
          <span className="userPageDetailUpdateItemTitle">User Name</span>
          <input
            type="text"
            className="userPageDetailItemInput"
            placeholder="Moz Yen"
            name="userName"
            onChange={handleChange}
          />
          <div className="userPageDetailUpdateItemBorder"></div>
        </div>
        <div className="userPageDetailUpdateItemContainer">
          <span className="userPageDetailUpdateItemTitle">Phone</span>
          <input
            type="text"
            className="userPageDetailItemInput"
            placeholder="+86 928 123 456"
            name="phone"
            onChange={handleChange}
          />
          <div className="userPageDetailUpdateItemBorder"></div>
        </div>
        <div className="userPageDetailUpdateItemContainer">
          <span className="userPageDetailUpdateItemTitle">E-mail</span>
          <input
            type="text"
            className="userPageDetailItemInput"
            placeholder="Mazta333@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <div className="userPageDetailUpdateItemBorder"></div>
        </div>
        <div className="userPageDetailUpdateItemContainer">
          <span className="userPageDetailUpdateItemTitle">Location</span>
          <input
            type="text"
            className="userPageDetailItemInput"
            placeholder="Taiwan"
            name="location"
            onChange={handleChange}
          />
          <div className="userPageDetailUpdateItemBorder"></div>
        </div>
      </FormContainer>
      <BntContainer className="userPageEditButton">
        <Link to={'/productList'}>
          <button className="userPageEditButtonItem">
            Back to List
            <span className="userPageEditButtonItemToolTip">
              All Changes will be Missed.
            </span>
          </button>
        </Link>
        <Link to={'/users'}>
          <button
            className="userPageEditButtonItem"
            disabled={
              Object.values(data).some((value) => value === '') && 'disabled'
            }
          >
            Save Change
            <span className="userPageEditButtonItemToolTip saveChange">
              Please Fill All required Columns
            </span>
          </button>
        </Link>
      </BntContainer>
    </Container>
  );
};

export default InfoForm;
