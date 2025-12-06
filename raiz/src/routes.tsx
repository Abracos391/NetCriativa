import Index from './pages/Index';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'NetCriativa',
    path: '/',
    element: <Index />
  }
];

export default routes;
