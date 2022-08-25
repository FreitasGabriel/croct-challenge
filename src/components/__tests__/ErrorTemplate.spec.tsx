import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { ErrorTemplate } from '../ErrorTemplate';

describe('ErrorTemplate Component', () => {
   const onClick = jest.fn();

   it('Renders correctly', () => {
      act(() => {
         render(<ErrorTemplate onClick={onClick} />);
      });

      expect(screen.getByTestId('error-wrapper__test')).not.toBeNull();
   });
});
