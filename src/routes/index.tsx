import React from 'react';
import { useAuth } from '../contexts/auth';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
