import styled from "styled-components";

const Container = styled.div`
    padding: 50px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url("/src/assets/bannerImg.jpg");
    /* :before {
        background-color: rgba(0, 0, 0, 0.6);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    } */
`;

const Text = styled.div`
    color: white;
    width: 55%;
    position: relative;
    z-index: 1;
    h2 {
        font-size: 3.875rem;
        margin-bottom: 25px;
    }
    p {
        margin-bottom: 25px;
    }
`;

export { Container, Text };