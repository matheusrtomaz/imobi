import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    width: 15vw;
    height: 50vh;
`;

const Menu = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    span {
        :hover {
            cursor: pointer;
        }
    }
`;

export { Container, Menu };