import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { AvatarUploading } from '../AvatarUploading';

describe('AvatarUploading Component', () => {
   it('Renders correctly', () => {
      act(() => {
         render(<AvatarUploading />);
      });

      expect(screen.getByTestId('avatar-uploading__test')).not.toBeNull();
   });
});
