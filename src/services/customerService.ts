import { Customer } from '../types/types';
import { generateMockCustomers } from '../utils/generateMockData';

const CUSTOMER_COUNT = 1000;

export const getCustomers = (): Promise<Customer[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockCustomers(CUSTOMER_COUNT));
    }, 500);
  });
};