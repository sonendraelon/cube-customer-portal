import React from 'react';
import { Customer } from '../../types/types';
import styled from '@emotion/styled';

interface Props {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const Card = styled.div<{ isSelected: boolean }>`
  padding: 16px;
  margin-bottom: 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#e0e0e0' : '#f5f5f5')};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Name = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onClick }) => {
  return (
    <Card isSelected={isSelected} onClick={onClick}>
      <Name>{customer.name}</Name>
      <Title>{customer.title}</Title>
    </Card>
  );
};

export default CustomerCard;