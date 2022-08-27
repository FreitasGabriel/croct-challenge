import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { ErrorTemplate } from '../ErrorTemplate';

describe('Error Template', () => {
   const onClick = jest.fn();
   const uploadImg = jest.fn();

   it('should be able render error template correctly', () => {
      act(() => {
         render(<ErrorTemplate onClick={onClick} />);
      });

      expect(screen.getByTestId('error-wrapper__test')).not.toBeNull();
   });

   it('should be able choose another image', async () => {
      const user = userEvent.setup();

      render(<ErrorTemplate onClick={onClick} />);

      const uploadImageButton = screen.getByTestId('choose-img__test');

      await user.click(uploadImageButton);
   });
});
