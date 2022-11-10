import styled from "styled-components";
import { Mobile } from '../responsive';
import { Link } from "react-router-dom";



const Container = styled.div`
    flex:1;
    height:70vh;
    position: relative;
    margin:5px;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${Mobile({ height : '20vh' })};
`;
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
    color:#fff;
    margin-bottom:20px;
    text-align:center;
    text-shadow: 2px 2px 8px #000;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


export default function CategoryItem ({item}) {
    return (
        <Container>
            <Link to={`products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
                </Info>
            </Link>   
        </Container>
    )
}