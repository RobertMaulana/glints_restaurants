import styled from 'styled-components'

export const CardContainer = styled.div`
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 20px;
    .action-container {
        width: 50px;
        display: flex;
        justify-content: space-between;
    }
    .action-container i {
        cursor: pointer;
    }
`