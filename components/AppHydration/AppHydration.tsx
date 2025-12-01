'use client';

import { useEffect, useState } from 'react';

const AppHydration = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div>{isMounted ? <div>{children}</div> : null}</div>;
};

export default AppHydration;
