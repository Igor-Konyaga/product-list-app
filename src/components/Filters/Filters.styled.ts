import styled from "styled-components";

export const StyledFilters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 1100px) {
        flex-direction: column;
        row-gap: 20px;
        align-items: center;
    }
`