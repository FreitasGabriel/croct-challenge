import styled from 'styled-components';

import {COLORS} from '../../constants/colors';

export const CropWrapper = styled.div`

    display: flex;

    width: 100%;

    z-index: 99;

    canvas{

        position: relative;
        left: 1.5rem;

        background-color: transparent;
        background: transparent;
    }


    .rc-slider-rail{
        background-color: ${COLORS.bluePrimary};
        height: 3px;
    }
    .rc-slider-track{
        background-color: ${COLORS.blueSecondary};
        height: 3px;
    }
    .rc-slider-handle{
        border: 2px solid ${COLORS.blueSecondary};
        width: 12px;
        height: 12px;
    }
`

export const SliderWrapper = styled.div`

    width: 15rem;
    height: 50%;

    position: relative;
    left: 5rem;
    top: 1.8rem;

    p{
        position: relative;
        margin-bottom: 10px;

        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${COLORS.graySecondary};
    }

    .save-button{

        width: 80px;
        height: 32px;

        position: relative;
        left: 10rem;
        top: 1.5rem;

        border-radius: 16px;
        border: none;

        background-color: ${COLORS.grayText};
        color: ${COLORS.whitePrimary};

        &:hover{
            cursor: pointer;
        }
    }

`

export const CloseIconWrapper = styled.button`

    position: relative;
    right: -7.5rem;
    top: 1rem;

    height: 10px;

    background: none;
	border: none;
    
	cursor: pointer;
`
