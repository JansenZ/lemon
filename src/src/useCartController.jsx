import { useCallback, useMemo } from 'react';
import useSetState from './useSetState';
import CartService from './CartService';

const useController = (initVal) => {
    const [state, setState] = useSetState(initVal);
    const { count, color } = state;
    const service = useMemo(() => new CartService(), []);
    const add = useCallback(()=>{
      console.log('===', count);
      setState({
        count: count + 1
      })
    }, [setState, count])

    const change = useCallback(()=>{
      setState({
        color: color + 'd'
      })
    }, [color, setState]);

    const getByte = useCallback(async ()=>{
        setState({
          loading: true
        })
        const data = await service.fetchData();
        setState({
          datalist: data,
          loading: false
        })
    }, [service, setState])

    return {
      state,
      add,
      change,
      getByte
    }

}
export default useController;