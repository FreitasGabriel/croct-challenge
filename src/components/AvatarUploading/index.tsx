import { useEffect, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { AvatarContext } from '../../context/AvatarContext';

import { ErrorTemplate } from '../ErrorTemplate';
import { InitialTemplate } from '../InitialTemplate';
import { CropTemplate } from '../CropTemplate';

import { AvatarUploadingWrapper } from './styles';

export const AvatarUploading = () => {
   const {
      template,
      setTemplate,
      loadFileIsEnabled,
      setLoadFileIsEnabled,
      setCanvaAvatar,
      uploadAvatar,
   } = useContext(AvatarContext);

   const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
      maxFiles: 1,
      accept: {
         'image/png': ['.png', '.jpeg', '.jpg'],
      },
      noClick: !loadFileIsEnabled,
      noDrag: !loadFileIsEnabled,
   });

   const closeCropped = () => {
      setTemplate('initial');
      setLoadFileIsEnabled(true);
      setCanvaAvatar('');
   };

   const handleTemplate = () => {
      switch (template) {
         case 'initial':
            return <InitialTemplate />;
         case 'cropping':
            return <CropTemplate onClick={() => closeCropped()} />;
         case 'error':
            return <ErrorTemplate onClick={() => closeCropped()} />;
         default:
            return <InitialTemplate />;
      }
   };

   useEffect(() => {
      if (fileRejections.length > 0) {
         setLoadFileIsEnabled(false);
         setTemplate('error');
      }
      if (acceptedFiles.length > 0) {
         setLoadFileIsEnabled(false);
         setTemplate('cropping');
         uploadAvatar(acceptedFiles[0]);
      }
   }, [acceptedFiles, fileRejections]);

   return (
      <AvatarUploadingWrapper
         {...getRootProps()}
         template={template}
         data-testid="avatar-uploading__test"
      >
         <input {...getInputProps()} />
         {handleTemplate()}
      </AvatarUploadingWrapper>
   );
};
