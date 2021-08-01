import { useState, useEffect } from 'react';

export function useStorage(key) {
  const [storageItem, setStorageItem] = useState(null);

  const getData = () => {
    try {
      const jsonValue = localStorage.getItem(key);
      setStorageItem(jsonValue != null ? JSON.parse(jsonValue) : null);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
  };

  const saveStorage = (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
      setStorageItem(value);
    } catch (e) {
    }
  };

  const clearStorage = () => {
    try {
      localStorage.removeItem(key);
      setStorageItem(null);
    } catch (e) {
    }
  };


  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return {storageItem, saveStorage, clearStorage};
}