import styled from 'styled-components/macro';
import { DataGrid } from '@mui/x-data-grid';
import { productData } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ActionBnt = styled.button`
  width: 70px;
  padding: 5px 8px;
  color: white;
  background-color: ${(props) =>
    props.action === 'O' ? '#8fbc8f' : '#ab4e52'};
  border: none;
  border-radius: 10px;
  margin-left: ${(props) => (props.action === 'O' ? '0px' : '15px')};
  cursor: pointer;
`;

const DataContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ProductDataGrid = () => {
  const columns = [
    {
      field: 'sku',
      headerName: 'SKU',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        return `${params.row.status ? 'Active' : 'Inactive'} `;
      },
    },
    {
      field: 'instock',
      headerName: 'Stock',
    },
    {
      field: 'createdtime',
      headerName: 'Created',
      width: 150,
    },
    {
      field: 'profitmargin',
      headerName: 'Profit',
      width: 100,
    },
    {
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Link to={'/product/' + params.row.id}>
              <ActionBnt action={'O'}>Edit</ActionBnt>
            </Link>
            <ActionBnt action={'X'} onClick={() => handleDelete(params.row.id)}>
              Delete
            </ActionBnt>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState(productData);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <DataContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        headerAlign="center"
        disableSelectionOnClick
        disableColumnMenu
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: 'purple',
            color: 'white',
            fontSize: 16,
          },
          '.MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
          },
          '.MuiDataGrid-columnHeaderTitleContainer': {
            justifyContent: 'start',
          },
          '.MuiDataGrid-sortIcon': {
            color: 'white',
          },
          '.MuiDataGrid-columnHeaderTitleContainerContent>span:first-child': {
            color: 'white',
          },
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: '#ffdce23b',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#ffdce247',
          },
          '.MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#ffdce247',
          },
          '.MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': {
            color: 'purple',
          },
          '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
            color: 'purple',
          },
          '.MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
        }}
      />
    </DataContainer>
  );
};

export default ProductDataGrid;
