import { useState } from 'react';
import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import Resizable from './resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  // const [input, setInput] = useState('');

  // const onClick = async () => {
  //   const output = await bundle(input);
  //   setCode(output);
  // };

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => setCode(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
