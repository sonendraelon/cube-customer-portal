import { Customer } from '../types/types';

export const generateMockCustomers = (count: number): Customer[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Title ${index + 1}`,
    address: `${index + 1} Main St, City, Country`,
  }));
};