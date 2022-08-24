import { useState } from "react";

import { AvatarUploading } from "./components/AvatarUploading";

import { AppWrapper } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <AvatarUploading />
    </AppWrapper>
  );
}

export default App;
