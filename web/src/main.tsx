import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { UserDataProvider } from './contexts/UserDataProvider';
import PatientPortal from './pages/patient-portal.tsx';
import Layout from './Layout';
import { PAGES } from './constants';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserDataProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path={PAGES.PATIENT_PORTAL} element={<PatientPortal />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </QueryClientProvider>
      </UserDataProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
