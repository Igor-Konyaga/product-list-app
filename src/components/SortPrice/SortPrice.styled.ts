import styled from "styled-components";


export const StyledSortPrice = styled.div`
    display: flex;
    column-gap: 14px;
    align-self: flex-end;

    @media (max-width: 1100px) {
        align-self: auto;
    }

    .sortPriceBtn {
        padding: 6px 14px;
        border-radius: 6px;
        min-height: 36px;
        transition: background-color 0.3s ease;

        font-size: 18px;

        &:hover {
            background-color: #c5c5c5;
            transition: background-color 0.3s ease;
        }

        &.activeFirstBtn, &.activeLastBtn {
            background-color: #59a6ff;
        }
    }
`