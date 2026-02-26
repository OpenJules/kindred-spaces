/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {useCallback, useEffect, useState} from 'react';

interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

export const useApiKey = () => {
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  const checkKey = useCallback(async (): Promise<boolean> => {
    const aistudio = (window as any).aistudio as AIStudio | undefined;
    
    if (aistudio) {
      try {
        const hasSelected = await aistudio.hasSelectedApiKey();
        setHasKey(hasSelected);
        return hasSelected;
      } catch (error) {
        console.warn('API Key check failed', error);
        return false;
      }
    }
    return false;
  }, []);

  // Run check automatically on mount
  useEffect(() => {
    checkKey();
  }, [checkKey]);

  const openKeySelector = useCallback(async () => {
    const aistudio = (window as any).aistudio as AIStudio | undefined;
    if (aistudio) {
      await aistudio.openSelectKey();
      // After opening, we assume they might have selected one
      setHasKey(true);
    }
  }, []);

  return {
    showApiKeyDialog,
    setShowApiKeyDialog,
    hasKey,
    checkKey,
    openKeySelector,
  };
};
