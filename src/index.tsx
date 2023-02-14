import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import TextEditor from './components/text-editor';

const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

root.render(<App />);
