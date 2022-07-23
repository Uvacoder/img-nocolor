import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';

import { UserContextProvider } from '../contexts/userContext';

import '../styles/globals.css';

const queryClient = new QueryClient();

const MyApp = ({
  Component, pageProps,
}: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute='class'>
      <UserContextProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserContextProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default MyApp;
