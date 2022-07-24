import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';

import { UserContextProvider } from '../contexts/userContext';

import { useUserContext } from '../contexts';

import '../styles/globals.css';

const queryClient = new QueryClient();

const MyApp = ({
  Component, pageProps,
}: AppProps) => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class'>
        <UserContextProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </UserContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
