import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Mobile } from '../responsive'; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Container = styled.div`
    height:70px;
    ${Mobile({height:'60px'})}
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${Mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Languages = styled.span`
    font-size:14px;
    cursor:pointer;
    ${Mobile({display:'none'})}
`;

const SerachInput = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${Mobile({marginLeft: "10px"})}
`;

const Input = styled.input`
    border:none;
    ${Mobile({width: "50px"})}
`;

const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Logo = styled.h1`
    font-weight:bold;
    cursor:pointer;
    color:#000;
    text-decoration:none;
    ${Mobile({width: "24px"})}
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${Mobile({justifyContent:'center', flex:2})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${Mobile({marginLeft: "10px", fontSize: "12px"})}
`;


export default function Navbar() {
    
    const quantity = useSelector(state => state.cart.quantity);
    

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>EN</Languages>
                    <SerachInput placeholder="Search">
                        <Input/>
                        <SearchIcon style={{ color:'grey', fontSize:16}}/>
                    </SerachInput>
                </Left>
                <Center>
                    <Link to='/'><Logo><sub>pg</sub>CART</Logo></Link>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <Link to='/cart'>
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}