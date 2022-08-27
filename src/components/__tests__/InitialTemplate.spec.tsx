import { render, screen } from '@testing-library/react';
import { AvatarContext } from '../../context/AvatarContext';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { InitialTemplate } from '../InitialTemplate';

describe('InitialTemplate Component', () => {
   it('should be able render initial template', () => {
      act(() => {
         render(<InitialTemplate />);
      });

      expect(screen.getByTestId('initial-wrapper__test')).not.toBeNull();
   });

   it('should be render template with cropped photo', () => {
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
               <InitialTemplate />
            </AvatarContext.Provider>,
         );
      });

      const component = screen.getByTestId('cropped-photo__test');

      expect(component).toBeInTheDocument();
   });
});
