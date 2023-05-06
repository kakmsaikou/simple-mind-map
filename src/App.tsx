import { useState } from 'react';
import CurlyBracket from './components/CurlyBracket';

const App = () => {
  const [sideHeight] = useState(100);
  return (
    <>
      <h1 className='text-red-500 border border-yellow-600'>Simple Mind Map</h1>
      <div className='flex items-center space-x-1'>
        <ul
          className='flex flex-col justify-between'
          style={{ height: `${sideHeight + 38}px`, lineHeight: '1em' }}
        >
          <li>动词普通形</li>
          <li>い形容词普通形</li>
          <li>な形容词干+な/名词(+助词)</li>
          <li>名词(+助词)+なんか</li>
        </ul>
        <CurlyBracket sideHeight={sideHeight} />
        <div>＋なんて</div>
      </div>
    </>
  );
};

export default App;
