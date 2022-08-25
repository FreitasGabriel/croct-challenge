import { AvatarProvider } from './context/AvatarContext';

import { AvatarUploading } from './components/AvatarUploading';

import { AppWrapper } from './styles';

function App() {
   return (
      <AvatarProvider>
         <AppWrapper>
            <AvatarUploading />
         </AppWrapper>
      </AvatarProvider>
   );
}

export default App;
