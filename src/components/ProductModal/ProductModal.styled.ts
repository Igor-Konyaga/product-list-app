import styled from "styled-components";


export const StyledProductModal = styled.div<{ className: boolean | string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.active {
        opacity: 1;
        transition: opacity 0.3s ease;
        pointer-events: auto;
    }

    .modalBody {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        width: 100%;
        max-width: 550px;
        padding: 30px;
        border-radius: 12px;
        background-color: #fff;
        transform: scale(0);
        transition: transform 0.3s ease;

        .wrapperImg {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 70%;
            min-height: 250px;

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
                font-size: 28px;

                @media (max-width: 768px) {
                    font-size: 22px;
                }
            }

            .productDescription {
                font-size: 16px;
                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }

            .productPrice {
                font-size: 24px;
                @media (max-width: 768px) {
                    font-size: 18px;
                }
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

            font-size: 24px;
            font-weight: 600;

            transition: background-color 0.3s ease;


            &:hover {
                background-color: #d9d9d9;
                transition: background-color 0.3s ease;
            }

            @media (max-width: 768px) {
                font-size: 20px;
            }
        }

        .exitBtn {
            position: absolute;
            top: 26px;
            right: 26px;
            border: none;
            background-color: transparent;
            transition: color 0.3s ease;

            .iconBtn {
                transition: color 0.3s ease;
            }

            &:hover {
                .iconBtn {
                    color: #484848;
                    transition: color 0.3s ease;
                }
            }
        }
    }

    .visibleModal {
        transform: scale(1);
        transition: transform 0.3s ease;
    }
`;