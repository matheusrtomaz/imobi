import styled from "styled-components";

const Container = styled.div`
    padding: 200px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url("/src/assets/bannerImg.jpg");
    width: 100%;
    height: calc(100vh - 56px);
    :before {
        /* content: ""; */
        background-color: rgba(0, 0, 0, 0.06);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`;

const Text = styled.div`
    width: 65%;
    position: relative;
    z-index: 1;
    h2{
        color: var(--white);
        font-size: 62px;
        font-weight: 700;
        margin-bottom: 25px;
    }
    p{
        color: var(--white);
        margin-bottom: 25px;
        font-size: 14px;
    }
    span{
        background-color: rgb(64, 136, 203);
        position: absolute;
        border: 0;
        color: var(--white);
        font-size: 14px;
        font-weight: 600;
        padding: 12px 120px;
        line-height: 24px;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export { Container, Text };
