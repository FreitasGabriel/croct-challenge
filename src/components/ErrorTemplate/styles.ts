import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

export const ErrorWrapper = styled.div`


    .info-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        left: 1rem;
        
    }

`

export const PhotoError = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 7rem ;
    height: 7rem;

    background-color: ${COLORS.grayPrimary};

    border-radius: 50%;

`

export const ErrorInfo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: left;

    margin-left: 20px;
    
    .message-info{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${COLORS.redPrimary};

        margin-bottom: 15px;
    }

    .message-action{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: ${COLORS.grayText};

        text-decoration: underline;
    }

`
