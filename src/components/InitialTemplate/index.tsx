import { useContext } from 'react';

import { AvatarContext } from '../../context/AvatarContext';

import { DropzoneIcon } from '../Icons/DropZoneIcon';
import { InitialTemplateWrapper, CroppedPhotoWrapper } from './style';

export const InitialTemplate = () => {
   const { canvaAvatar } = useContext(AvatarContext);

   return (
      <InitialTemplateWrapper avatar={canvaAvatar}>
         {canvaAvatar && (
            <CroppedPhotoWrapper>
               <img src={canvaAvatar} alt="avatar" />
            </CroppedPhotoWrapper>
         )}
         <div className="info-wrapper">
            <div className="icon-wrapper">
               <DropzoneIcon />
               <p>Organization Logo</p>
            </div>
            <p className="drop-message">Drop the image here or click to browse.</p>
         </div>
      </InitialTemplateWrapper>
   );
};
