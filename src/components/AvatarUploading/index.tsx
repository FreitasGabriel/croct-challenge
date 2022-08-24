import {useDropzone} from 'react-dropzone'
import { AvatarUploadingWrapper } from './styles';

import {ErrorTemplate} from '../ErrorTemplate'

import {DropzoneIcon} from '../Icons/DropZoneIcon';
import { useEffect } from 'react';

export const AvatarUploading = () => {


  const {acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone()

  useEffect(() => {
    console.log(acceptedFiles, isDragAccept, isDragReject)
  }, [acceptedFiles])

  return (
    <AvatarUploadingWrapper {...getRootProps()} hasFile={acceptedFiles.length > 0}>
      <input {...getInputProps()} />
        {/* <div className='section-wrapper'>
          <div className='icon-wrapper'>
            <DropzoneIcon />
            <p>Organization Logo</p>
          </div>
          <p className='drop-message'>Drop the image here or click to browse.</p>
        </div> */}

        <ErrorTemplate onClick={() => console.log('teste')}/>
    </AvatarUploadingWrapper>
  );
};
