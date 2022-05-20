import styled from 'styled-components/macro';
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, productRows } from '../../dummyData';
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
  const [rows, setRows] = useState(productRows);

  function handleDelete(id) {
    setRows(rows.filter((item) => item.id !== id));
  }

  const columns = [
    ...productColumns,
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

  return (
    <DataContainer>
      <DataGrid
        rows={rows}
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
