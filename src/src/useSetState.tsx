import { useState, useCallback } from 'react';
const useSetState = (istate: any) => {
  const [state, set] = useState(istate);
  const setState = useCallback((news) => {
      set((pre: any)=> Object.assign({}, pre, news instanceof Function ? news(pre) : news));
  }, []);
  return [state, setState];
};
export default useSetState;