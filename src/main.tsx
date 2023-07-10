import App from './app';
import { createRoot } from 'react-dom/client';
import { worker } from './mocks/browser';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

root.render(<App />);
