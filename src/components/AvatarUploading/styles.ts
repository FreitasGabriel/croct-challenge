import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

type AvatarUploadingProps = {
   template: string;
};

export const AvatarUploadingWrapper = styled.div<AvatarUploadingProps>`
   display: flex;
   flex-direction: row;
   align-items: center;

   width: 34rem;
   height: 177px;
   background-color: ${COLORS.whiteSecondary};

   border: 2px ${({ template }) => (template !== 'initial' ? 'none' : 'dashed')} ${COLORS.grayPrimary};
   border-radius: 8px;

   &:hover {
      cursor: ${({ template }) => (template !== 'initial' ? 'auto' : 'pointer')};
      border: 3px ${({ template }) => (template !== 'initial' ? 'none' : 'dashed')} ${COLORS.grayPrimary};
   }
`;
