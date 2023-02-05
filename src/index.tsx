import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import CodeCell from './components/code-cell';

const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

root.render(<App />);
