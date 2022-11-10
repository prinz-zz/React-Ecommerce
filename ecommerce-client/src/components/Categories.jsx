import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from "./CategoryItem";
import { Mobile } from '../responsive'; 


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    ${Mobile({ padding:'20px', flexDirection:"column"})}
`;

export default function Categories() {
    return (
        <Container>
            {categories.map( item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}