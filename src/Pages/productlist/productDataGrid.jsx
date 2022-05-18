import styled from 'styled-components/macro';
import { DataGrid } from '@mui/x-data-grid';
import { productData } from '../../dummyData';
import './productdatagrid.css';

const columns = [
  {
    field: 'sku',
    headerName: 'SKU',
    type: 'string',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'boolean',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: true,
    renderCell: (params) => {
      return `${params.row.status ? 'Active' : 'Inactive'} `;
    },
  },
  {
    field: 'instock',
    headerName: 'In-Stock',
    type: 'number',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: true,
  },
  {
    field: 'createdtime',
    headerName: 'Created Time',
    type: 'date',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: true,
  },
  {
    field: 'profitmargin',
    headerName: 'Profit Margin',
    type: 'number',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    editable: true,
  },
  {
    headerName: 'Action',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    hideSortIcons: true,
    renderCell: (params) => {
      return (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    },
  },
];

const DataContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ProductDataGrid = () => {
  return (
    <DataContainer>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[5, 10]}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu
        hideSortIcons="visible"
      />
    </DataContainer>
  );
};

export default ProductDataGrid;
