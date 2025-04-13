import Header from '../components/Header/Header';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
