import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { InitialTemplate } from '../InitialTemplate';

describe('InitialTemplate Component', () => {
   it('Renders correctly', () => {
      act(() => {
         render(<InitialTemplate />);
      });

      expect(screen.getByTestId('initial-wrapper__test')).not.toBeNull();
   });
});
