import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { AvatarUploading } from '../AvatarUploading';

import { AvatarContext } from '../../context/AvatarContext';

describe('AvatarUploading Component', () => {
   it('should be able render avatar uploading correctly', () => {
      act(() => {
         render(<AvatarUploading />);
      });

      expect(screen.getByTestId('avatar-uploading__test')).not.toBeNull();
   });

   it('should be able tender initial template', () => {
      const mockFunction = jest.fn();

      act(() => {
         render(
            <AvatarContext.Provider
               value={{
                  canvaAvatar: '12356467232',
                  avatar: '',
                  loadFileIsEnabled: true,
                  template: 'initial',
                  setTemplate: mockFunction,
                  uploadAvatar: mockFunction,
                  setCanvaAvatar: mockFunction,
                  setAvatarScale: mockFunction,
                  setLoadFileIsEnabled: mockFunction,
                  avatarScale: 1.5,
               }}
            >
               <AvatarUploading />
            </AvatarContext.Provider>,
         );
      });

      expect(screen.getByTestId('avatar-uploading__test')).not.toBeNull();
   });

   it('should be able tender cropping template', async () => {
      const mockFunction = jest.fn();
      const user = userEvent.setup();

      act(() => {
         render(
            <AvatarContext.Provider
               value={{
                  canvaAvatar: '12356467232',
                  avatar: '',
                  loadFileIsEnabled: true,
                  template: 'cropping',
                  setTemplate: mockFunction,
                  uploadAvatar: mockFunction,
                  setCanvaAvatar: mockFunction,
                  setAvatarScale: mockFunction,
                  setLoadFileIsEnabled: mockFunction,
                  avatarScale: 1.5,
               }}
            >
               <AvatarUploading />
            </AvatarContext.Provider>,
         );
      });

      const iconClose = screen.getByTestId('close-icon__test');
      await user.click(iconClose);

      expect(screen.getByTestId('avatar-uploading__test')).not.toBeNull();
   });

   it('should be able tender error template', async () => {
      const mockFunction = jest.fn();
      const user = userEvent.setup();

      act(() => {
         render(
            <AvatarContext.Provider
               value={{
                  canvaAvatar: '12356467232',
                  avatar: '',
                  loadFileIsEnabled: true,
                  template: 'error',
                  setTemplate: mockFunction,
                  uploadAvatar: mockFunction,
                  setCanvaAvatar: mockFunction,
                  setAvatarScale: mockFunction,
                  setLoadFileIsEnabled: mockFunction,
                  avatarScale: 1.5,
               }}
            >
               <AvatarUploading />
            </AvatarContext.Provider>,
         );
      });

      const iconClose = screen.getByTestId('close-icon__test');
      await user.click(iconClose);

      expect(screen.getByTestId('avatar-uploading__test')).not.toBeNull();
   });
});
