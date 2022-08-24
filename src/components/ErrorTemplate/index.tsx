
import { ErrorIcon } from '../Icons/ErrorIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import { ErrorWrapper, ErrorInfo, PhotoError, } from './styles';

interface ErrorTemplateProps {
    onClick: () => void;
}

export const ErrorTemplate = ({ onClick }: ErrorTemplateProps) => {
    return (
        <ErrorWrapper>
            <div className='info-wrapper'>
                <PhotoError>
                    <ErrorIcon />
                </PhotoError>
                <ErrorInfo>
                    <p className='message-info'>Sorry, the upload failed</p>
                    <a className='message-action' onClick={onClick}>Try again</a>
                </ErrorInfo>
            </div>
            <CloseIcon />
        </ErrorWrapper>
    )
}
