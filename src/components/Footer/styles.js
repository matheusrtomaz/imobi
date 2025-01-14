import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 100px 150px;
    background-color: var(--white);
`;

const Item = styled.div`
    img {
        width: 70px;
    }
    h3 {
        margin-bottom: 10px;
    }
    ul {
        li {
            padding: 12px 0;
        }
    }
    nav {
        display: flex;
        margin-top: 15px;
        li {
            span {
                margin-right: 15px;
            }
        }
    }
`;

const Copy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    ul {
        display: flex;
        align-items: center;
        li {
            span {
                margin-left: 15px;
            }
        }
    }
`;

const Fragment = styled.div`

`;

export { Fragment, Container, Item, Copy };
