import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { CropTemplate } from '../CropTemplate';

describe('CropTemplate Component', () => {
   const onClick = jest.fn();

   it('should be able render crop template correctly', () => {
      act(() => {
         render(<CropTemplate onClick={onClick} />);
      });

      expect(screen.getByTestId('crop-wrapper__test')).not.toBeNull();
   });
});
