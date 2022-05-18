import styled from 'styled-components/macro';
import ProductDataGrid from './productDataGrid';

const Container = styled.div`
  flex: 7;
  margin: 0px 27px 10px 10px;
  border: 1px solid purple;
  box-shadow: 4px 4px 4px -1px purple;
`;

const ProductList = () => {
  return (
    <Container>
      <ProductDataGrid />
    </Container>
  );
};

export default ProductList;
