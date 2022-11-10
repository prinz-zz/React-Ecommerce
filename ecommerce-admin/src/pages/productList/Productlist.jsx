import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//import { productRows } from '../../data';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/apiCalls';

export default function Productlist() {

    //const [data, setData] = useState(productRows);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        //setData(data.filter(item => item.id !== id))
        deleteProduct(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className='productListItem'>
                    <img src={params.row.img} alt='' />
                    {params.row.title}
                </div>
            )
        }
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        //{ field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        {
            field: 'actions', headerName: 'Action', width: 100, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/'+params.row._id}>
                            <button className='edit'>Edit</button>
                        </Link>
                    <DeleteOutlinedIcon className='icon' onClick={()=> handleDelete(params.row._id)}/>
                    </>    
                )
            }
        },
      ];

    return (
        <div className='productList'>
        <DataGrid
        rows={products}
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