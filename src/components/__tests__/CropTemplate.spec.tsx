import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { CropTemplate } from '../CropTemplate';

describe('CropTemplate Component', () => {
   const onClick = jest.fn();

   it('Renders correctly', () => {
      act(() => {
         render(<CropTemplate />);
      });

      expect(screen.getByTestId('crop-wrapper__test')).not.toBeNull();
   });
});
