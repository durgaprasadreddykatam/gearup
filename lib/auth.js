import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('user'));
    if (storageData && storageData.userauthenticated) {
      setIsAuth(true);
    }
  }, []);
return isAuth;
}
