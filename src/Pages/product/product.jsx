import styled from 'styled-components/macro';
import ProductInfoPage from './LeftPage';
import ProductTabs from './RightPage';

const Container = styled.div`
  flex: 7;
  margin: 0px 27px 10px 10px;
  border: 1px solid purple;
  box-shadow: 4px 4px 4px -1px purple;
  display: flex;
  gap: 10px;
`;

const Product = () => {
  return (
    <Container>
      <ProductInfoPage />
      <ProductTabs />
    </Container>
  );
};

export default Product;
