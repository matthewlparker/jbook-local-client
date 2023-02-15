import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';

const container = document.querySelector('#root');
const root = createRoot(container!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

root.render(<App />);
