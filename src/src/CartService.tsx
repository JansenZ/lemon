
export default class CartService {
    constructor() {

    }

    fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{name:'k1', sex:'2'},{name:'k2', sex: '3'}])
            }, (1000));
        });
    }

}