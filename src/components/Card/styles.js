import styled from "styled-components";

const Container = styled.div`
    width: 23%;
    margin-bottom: 12px;
    background-color: var(--background-color);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Img = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
`;

const Description = styled.div`
    padding: 12px;
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-color);
    }
    h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

const Items = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span {
        margin-bottom: 10px;
    }
`;

export { Container, Img, Description, Items };
