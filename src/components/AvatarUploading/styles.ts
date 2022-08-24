import styled from "styled-components";
import {COLORS} from '../../constants/colors';

type AvatarUploadingProps = {
  hasFile: boolean
}

export const AvatarUploadingWrapper = styled.div<AvatarUploadingProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 34rem;
  height: 177px;
  background-color: ${COLORS.whiteSecondary};

  border: 2px ${({hasFile}) => hasFile ? 'none' : 'dashed' } ${COLORS.grayPrimary};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    border: 3px ${({hasFile}) => hasFile ? 'none' : 'dashed' } ${COLORS.grayPrimary};
  }

  .section-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

    .drop-message{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${COLORS.graySecondary};
    }
  }

  .icon-wrapper{

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
`;
