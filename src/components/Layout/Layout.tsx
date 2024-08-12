import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;