import styled from "styled-components";


export const StyledFilterPriceRange = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;
    }

    .labelInput {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        color: #cbcbcb;

        .input {
            max-width: 100%;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 18px;
            font-weight: 600;

            &::-webkit-inner-spin-button {
                appearance: none;
            }
        }
    }

    .resetBtn {
        padding: 8px 14px;
        min-width: 100px;
        min-height: 36px;
        border-radius: 6px;
        align-self: flex-end;
        background-color: white;
        border: none;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #c5c5c5;
            transition: background-color 0.3s ease;
        }

        @media (max-width: 768px) {
        align-self: auto;
        }
    }
`