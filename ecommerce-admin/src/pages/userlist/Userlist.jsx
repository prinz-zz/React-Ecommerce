import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClients , deleteClients } from '../../redux/apiCalls';
import { useEffect } from 'react';


export default function UserList() {

    //const [data, setData] = useState(userRows)
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.client.clients);

    useEffect(() => {
        getClients(dispatch);
    },[dispatch])


    const handleDelete = (id) => {
        //setData(data.filter(item => item.id !== id))
        deleteClients(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {field: 'client', headerName: 'username', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img src={params.row.img} alt='' />
                    {params.row.username}
                </div>
            )
        }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'isAdmin', headerName: 'Admin', width: 100 },
        // { field: 'transaction', headerName: 'Transaction Volume', width: 150 },
        {
            field: 'actions', headerName: 'Action', width: 100, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/'+params.row._id}>
                            <button className='edit'>Edit</button>
                        </Link>
                    <DeleteOutlinedIcon className='icon' onClick={()=> handleDelete(params.row.id)}/>
                    </>    
                )
            }
        },
      ];

    return (
        <div className="userList">
       <DataGrid
        rows={clients}
        disableSelectionOnClick        
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />

        </div>
    ) 
}