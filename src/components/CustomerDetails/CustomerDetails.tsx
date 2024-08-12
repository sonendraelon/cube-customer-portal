import React from 'react';
import styled from '@emotion/styled';
import { Customer } from '../../types/types';
import PhotoGrid from './PhotoGrid';

interface Props {
  customer: Customer | null;
}

const Container = styled.div`
  padding: 24px;
`;

const Name = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 18px;
  color: #666;
`;

const Address = styled.p`
  margin: 0 0 24px;
  font-size: 16px;
`;

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  if (!customer) return <div>Select a customer to view details</div>;

  return (
    <Container>
      <Name>{customer.name}</Name>
      <Title>{customer.title}</Title>
      <Address>{customer.address}</Address>
      <PhotoGrid />
    </Container>
  );
};

export default CustomerDetails;