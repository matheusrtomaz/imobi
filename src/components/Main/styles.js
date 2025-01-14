import styled from "styled-components";

const Container = styled.div`
    background-color:rgb(244, 246, 247);
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px 150px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 25px 150px;
`;

export { Container, Header, Wrapper };
