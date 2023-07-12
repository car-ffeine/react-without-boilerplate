import App from './app';
import { createRoot } from 'react-dom/client';
import { worker } from './mocks/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
