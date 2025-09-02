import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-background bg-gradient-to-b from-[#8EE2FF] via-[#ffffff] to-white">
      <Header />
      <main>{children}</main>
      <footer className="bg-[#003138] text-white text-center py-4 mt-12">
        <p>&copy; 2025 PT Mangatur Dharma</p>
      </footer>
    </div>
  );
};

export default Layout;
