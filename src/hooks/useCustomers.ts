import { useQuery } from 'react-query';
import { getCustomers } from '../services/customerService';

export const useCustomers = () => {
  return useQuery('customers', getCustomers);
};