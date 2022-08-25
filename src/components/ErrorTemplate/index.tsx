import { useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import { AvatarContext } from '../../context/AvatarContext';

import { ErrorIcon } from '../Icons/ErrorIcon';
import { CloseIcon } from '../Icons/CloseIcon';

import { ErrorWrapper, ErrorInfo, PhotoError, CloseIconWrapper } from './styles';

interface ErrorTemplateProps {
   onClick: () => void;
}

export const ErrorTemplate = ({ onClick }: ErrorTemplateProps) => {
   const { getInputProps, getRootProps, acceptedFiles } = useDropzone();
   const { setTemplate, uploadAvatar } = useContext(AvatarContext);

   const chooseImg = useEffect(() => {
      if (acceptedFiles.length > 0) {
         setTemplate('cropping');
         uploadAvatar(acceptedFiles[0]);
      }
   }, [acceptedFiles]);

   return (
      <ErrorWrapper>
         <div className="info-wrapper">
            <PhotoError>
               <ErrorIcon />
            </PhotoError>
            <ErrorInfo {...getRootProps()}>
               <p className="message-info">Sorry, the upload failed</p>
               <a {...getInputProps} className="message-action" onClick={() => chooseImg}>
                  Try again
               </a>
            </ErrorInfo>
         </div>
         <CloseIconWrapper onClick={onClick}>
            <CloseIcon />
         </CloseIconWrapper>
      </ErrorWrapper>
   );
};
