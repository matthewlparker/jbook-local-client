import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
const root = createRoot(container!);
const App = () => {
  return <h1>SDG</h1>;
};

root.render(<App />);
