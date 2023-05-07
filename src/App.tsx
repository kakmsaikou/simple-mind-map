import { useEffect, useRef, useState } from 'react';
import CurlyBracket from './components/CurlyBracket';

const App = () => {
  const [ulHeight, setUlHeight] = useState(0);

  const itemList = ['动词普通形', 'い形容词普通形', 'な形容词干+な/名词(+助词)', '名词(+助词)+なんか'];

  const refUl = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setUlHeight(refUl.current?.clientHeight || 0);
    console.log('height', ulHeight);
  }, [ulHeight]);
  return (
    <>
      <h1 className='text-red-500 border border-yellow-600'>Simple Mind Map</h1>
      <div className='flex items-center space-x-1'>
        <ul
          className='flex flex-col justify-between space-y-2.5'
          style={{
            lineHeight: '1em',
          }}
          ref={refUl}
        >
          {
            itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <CurlyBracket sideHeight={ulHeight} />
        <div>＋なんて</div>
      </div>
    </>
  );
};

export default App;
