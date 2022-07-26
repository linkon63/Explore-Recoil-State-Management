import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import RecoilHome from './components/RecoilHome';
function App() {
  return (
    <div>
      <RecoilRoot>
        <RecoilHome />
      </RecoilRoot>
    </div>
  );
}

export default App;
