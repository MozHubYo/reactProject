import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, DeleteForever } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { userListRows } from '../../dummyData';
import './userlist.css';

export default function UserList() {
  const [data, setData] = useState(userListRows);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <span className="userListName">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.userName}
            </span>
          </div>
        );
      },
    },
    { field: 'email', headerName: 'E-mail', width: 200 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'transaction', headerName: 'Transaction', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListButton">
            <Link to={'/users/' + params.row.id}>
              <Edit className="userListButtonEdit" />
            </Link>
            <DeleteForever
              className="userListButtonDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
