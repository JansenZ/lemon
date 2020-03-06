import useCartController from './useCartController';
const useO2OController = () => {
    return useCartController({count: 99, color: 'black'});
}
export default useO2OController;