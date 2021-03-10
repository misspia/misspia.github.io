import React, { useState, useEffect } from 'react';

export const useTabVisiblity = () => {
  const [isTabVisible, setIsTabVisible] = useState(true)

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      setIsTabVisible(document.visibilityState === 'visible');
    })
  }, []);

  return {
    isTabVisible
  }
}
