import styled from "styled-components";

const Container = styled.div`
    padding: 25px 150px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--white);
`;

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 55px;
    }
`;

const Menu = styled.div``;

const Login = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 55px;
        height: auto;
        border-radius: 50%;
        margin-left: 15px;
    }
    span.toque {
        width: 55px;
        height: 55px;
        border: 2px solid var(--gray);
        border-radius: 50px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
        margin-left: 15px;
        background-color: var(--white);
        color: var(--black);
        &:hover {
            background-color: var(--gray);
        }
    }
    span.nome {
        font-size: 1.2rem;
        font-weight: 500;
        margin-left: 15px;
    }
    &:hover {
        cursor: pointer;
    }
`;

export { Container, Logo, Menu, Login };
