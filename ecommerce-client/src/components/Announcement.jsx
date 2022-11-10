import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Rupee = styled.span`
    font-weight:800;
    margin-left:5px;
`;

export default function Announcement() {
    return (
        <Container>Super Deal! Free Shipping on Orders Over <Rupee>&#8377;500</Rupee></Container>
    )
}