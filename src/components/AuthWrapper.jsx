import { useEffect, useState } from 'react';
import {auth } from '@/pages/api/firebase'; // Import Firebase auth
import {LoginPage} from "@/components/LoginPage"
import {LoadingComponent} from "@/components/LoadingComponent"

function AuthWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setIsLoggedIn(true);
      } else {
        // User is not logged in
        setIsLoggedIn(false);
      }
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {isLoggedIn === true && children}
      {isLoggedIn === false && <LoginPage />}
      {isLoggedIn === null && <LoadingComponent />}
    </div>
  );
}

export default AuthWrapper;
