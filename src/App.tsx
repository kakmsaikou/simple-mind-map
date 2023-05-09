import { ChangeEvent, useEffect, useRef, useState } from 'react';
import CurlyBracket from './components/CurlyBracket';

const App = () => {
  const [childNodesHeight, setUlHeight] = useState(0);

  const [childNodeList, setChildNodeList] = useState([
    '动词普通形',
    'い形容词普通形',
    'な形容词干+な/名词(+助词)',
    '名词(+助词)+なんか',
  ]);

  const childNodes = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setUlHeight(childNodes.current?.clientHeight || 0);
  }, [childNodeList]);

  const handleChildNodeChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.value === '') return;
    setChildNodeList(
      childNodeList.map((item, i) => {
        if (i === index) {
          return e.target.value;
        }
        return item;
      })
    );
  };
  return (
    <>
      <h1 className='text-red-500 border border-yellow-600'>Simple Mind Map</h1>
      <main className='flex'>
        <div>
          <input type='text' placeholder='Input Root' />
          <ul>
            {childNodeList.map((_item, index) => (
              <li key={index}>
                <input
                  type='text'
                  placeholder='Input Child'
                  value={childNodeList[index]}
                  onInput={e =>
                    handleChildNodeChange(
                      e as ChangeEvent<HTMLInputElement>,
                      index
                    )
                  }
                />
              </li>
            ))}
            <li>
              <button
                className='btn btn-primary h-4'
                onClick={() => {
                  setChildNodeList([...childNodeList, '']);
                }}
              >
                +
              </button>
            </li>
          </ul>
        </div>

        <div className='flex items-center space-x-1 bg-white text-black'>
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
