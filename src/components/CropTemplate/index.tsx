import { useContext, useRef } from 'react';
import Slider from 'rc-slider';
import ReactAvatar from 'react-avatar-editor';
import { AvatarContext } from '../../context/AvatarContext';

import { CloseIcon } from '../Icons/CloseIcon';

import { CropWrapper, SliderWrapper, CloseIconWrapper } from './styles';
import 'rc-slider/assets/index.css';

interface CropTemplate {
   onClick: () => void;
}

export const CropTemplate = ({ onClick }: CropTemplate) => {
   const {
      setCanvaAvatar,
      setTemplate,
      avatarScale,
      setAvatarScale,
      setLoadFileIsEnabled,
      avatar,
   } = useContext(AvatarContext);

   const editorRef = useRef(null);

   const saveImg = () => {
      setTemplate('initial');
      if (editorRef) {
         const canvasScaled = editorRef.current.getImageScaledToCanvas();
         setCanvaAvatar(canvasScaled.toDataURL());
         setLoadFileIsEnabled(true);
         setAvatarScale(1);
      }
   };

   return (
      <CropWrapper data-testid="crop-wrapper__test">
         <ReactAvatar
            ref={editorRef}
            image={avatar}
            width={140}
            borderRadius={100}
            height={140}
            border={0}
            color={[242, 245, 248, 1]} // RGBA
            scale={avatarScale}
         />

         <SliderWrapper>
            <p>Crop</p>
            <Slider
               className="slider-component"
               min={1}
               max={2}
               startPoint={1}
               step={0.05}
               onChange={(e: number | number[]) => setAvatarScale(e as number)}
            />
            <button type="button" className="save-button" onClick={saveImg}>
               Save
            </button>
         </SliderWrapper>

         <CloseIconWrapper data-testid="close-icon__test" onClick={onClick}>
            <CloseIcon />
         </CloseIconWrapper>
      </CropWrapper>
   );
};
