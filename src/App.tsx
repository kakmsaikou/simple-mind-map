import { useEffect, useRef, useState } from 'react';
import CurlyBracket from './components/CurlyBracket';

const App = () => {
  const [childNodesHeight, setUlHeight] = useState(0);

  const childNodeList = [
    '动词普通形',
    'い形容词普通形',
    'な形容词干+な/名词(+助词)',
    '名词(+助词)+なんか',
  ];

  const childNodes = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setUlHeight(childNodes.current?.clientHeight || 0);
    console.log('height', childNodesHeight);
  }, [childNodesHeight]);
  return (
    <>
      <h1 className='text-red-500 border border-yellow-600'>Simple Mind Map</h1>
      <main className='flex'>
        <div>
          <input type='text' placeholder='Input Root' />
          <ul>
            <li>
              <input type='text' placeholder='Input Child' />
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-1'>
          <ul
            className='flex flex-col justify-between space-y-2.5'
            style={{
              lineHeight: '1em',
            }}
            ref={childNodes}
          >
            {childNodeList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <CurlyBracket sideHeight={childNodesHeight} />
          <div>＋なんて</div>
        </div>
      </main>
    </>
  );
};

export default App;
