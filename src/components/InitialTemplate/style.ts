import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

type InitialTemplateProps = {
   avatar: string;
}

export const InitialTemplateWrapper = styled.div<InitialTemplateProps>`
   display: flex;
   margin: 0 auto;

   .info-wrapper{
      position: relative;
      top: ${({avatar}) => avatar === '' ? '0rem' : '2.5rem'};
   }

   .icon-wrapper {
      margin: 6px auto;
      width: 145px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      p {
         font-family: 'Inter', sans-serif;
         font-weight: 500;
         font-size: 14px;
         line-height: 25px;
         color: ${COLORS.grayTerciary};
      }
   }

   .drop-message {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${COLORS.graySecondary};
   }
`;

export const CroppedPhotoWrapper = styled.div`

   display: flex;

   position: relative;
   left: -3rem;

   img{
      width: 140px;
      height: 140px;
      border-radius: 100%;
   }

`
