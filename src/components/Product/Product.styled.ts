import styled from "styled-components";

export const StyledProduct = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 12px;
    flex-basis: calc(25% - 15px);
    padding: 28px 24px;
    border-radius: 16px;:;
    background-color: #ffffff;

    @media (max-width: 1300px) {
        flex-basis: calc(33.333% - 13.4px);
    }

    @media (max-width: 950px) {
        flex-basis: calc(50% - 10px);
    }

    @media (max-width: 750px) {
        flex-basis: 100%;
        max-width: 400px;
        margin: 0 auto;
    }

    .wrapperImg {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 70%;
        height: 300px;
        overflow: hidden;

        .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .productInfo {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        margin-bottom: 12px;

        .productTitle {
            max-width: 150px;
        }

        .productPrice {
            font-size: 18px;
        }
    }

    .productBtn {
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #212121;
        border-radius: 8px;
        background-color: transparent;

        font-size: 22px;
        font-weight: 600;

        transition: background-color 0.3s ease;


        &:hover {
            background-color: #d9d9d9;
            transition: background-color 0.3s ease;
        }
    }
`