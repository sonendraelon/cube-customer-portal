import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from '@emotion/styled';
import Layout from './components/Layout/Layout';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import { Customer } from './types/types';

const queryClient = new QueryClient();

const DetailsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CustomerList
          selectedCustomerId={selectedCustomer?.id ?? null}
          onSelectCustomer={setSelectedCustomer}
        />
        <DetailsContainer>
          <CustomerDetails customer={selectedCustomer} />
        </DetailsContainer>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;