import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { ErrorTemplate } from '../ErrorTemplate';

describe('should be able render error template', () => {
   const onClick = jest.fn();
   const uploadImg = jest.fn();

   it('Renders correctly', () => {
      act(() => {
         render(<ErrorTemplate onClick={onClick} />);
      });

      expect(screen.getByTestId('error-wrapper__test')).not.toBeNull();
   });

   it('should be choose another image', async () => {
      const user = userEvent.setup();

      const {} = render(<ErrorTemplate onClick={onClick} />);

      const uploadImageButton = screen.getByTestId('choose-img__test');

      await user.click(uploadImageButton);
   });
});
