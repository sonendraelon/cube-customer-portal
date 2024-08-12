import React from 'react';
import styled from '@emotion/styled';
import CustomerCard from './CustomerCard';
import { Customer } from '../../types/types';
import { useCustomers } from '../../hooks/useCustomers';

interface Props {
  selectedCustomerId: number | null;
  onSelectCustomer: (customer: Customer) => void;
}

const ListContainer = styled.div`
  width: 300px;
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: #f9f9f9;
`;

const CustomerList: React.FC<Props> = ({ selectedCustomerId, onSelectCustomer }) => {
  const { data: customers, isLoading, error } = useCustomers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading customers</div>;

  return (
    <ListContainer>
      {customers?.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer)}
        />
      ))}
    </ListContainer>
  );
};

export default CustomerList;