import React, { useContext, ReactElement } from 'react';
import { createContainer } from '../hox/unstated-next';
import useB2CController from './useB2CController';

let Counter = createContainer(useB2CController);

function Provider(Context: any) {
  return function(Wrap: any) {
    return function() {
        return(
          <Context.Provider>
              <Wrap />
          </Context.Provider>
        )
    };
  }
}

export function Cart() {
    const data = Counter.useContainer();
    const { state, add, change } = data;
    const { count } = state;
  console.log('???');
    return(
      <div>
          <p>{count}</p>
          <div onClick={add}>加起来</div>
          <div onClick={change}>+b起来</div>
          <Side />
          <div style={{
            width:100,
            fontSize: '10px',
            border: '1px solid',
          }}>
            <span>哈哈</span>
          </div>
      </div>
    );
}

export default Provider(Counter)(Cart)

const Side = () => {
  const props = Counter.useContainer();
  const { state, add, change } = props;
  const { count, color } = state;
  return(
    <div>
      <p>{color}</p>
      <div>injected{count}</div>
    </div>
  )
}

// const injectSide = inject(({ state: any, add: any }) => {
//   return {
//       count: state.count,
//       add
//   }
// })(Side);

// function inject(props: any) {
//   return function(Wrap) {
//       return 
//   }
// }

// const Wrapside = inject((state: any, add: any)=>({state, add}),ThemeContext)(Side);

// function inject(ppp: any, Context: any) {
//     function ConnectCom(Cop: any) {
//         return function Cx(props: any) {
//             return(
//               <Context.Consumer>
//                 {
//                   (tprops: any) => <Cop {...ppp} {...props} />
//                 }
//               </Context.Consumer>
//             );
//         }
//     }
//     return ConnectCom;
// }

// const Side2 = () => {
//   const { state, add, change, hh, jj } = useO2OController();
//   const { count, color } = state;
//   return(
//     <div>
//       <p>{count}</p>
//       <p>{jj}</p>
//       <div onClick={hh}>assss</div>
//     </div>
//   )
// }