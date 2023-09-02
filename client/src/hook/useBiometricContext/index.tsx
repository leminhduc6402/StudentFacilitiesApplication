import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

function useBiometricContext() {
  const [isBiometricSupport, setIsBiometricSupport] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupport(compatible);
    })();
  }, []);

  return [isBiometricSupport];
}

export default useBiometricContext;
