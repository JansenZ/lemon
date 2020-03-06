import React, { useContext, ReactElement } from 'react';
import { createPage, inject } from '../hox/connect';
import { Provider } from './provider';
import useO2OController from './useO2OController';

export function Cart(data: any) {
    const { state, add, change } = data;
    const { count, color } = state;
    return(
      <div style={{marginTop: '50px'}}>

          <p>{count}</p>
          
          <div onClick={add}>加起来SSS</div>
          <div onClick={change}>+b起来SSS</div>
          <InjectSide />
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

export default createPage(useO2OController)(Cart)

const Side = (props: any) => {
  const { state, add, change } = props;
  const { count, color } = state;
  return(
    <div>
        <p>{color}</p>
        <p>injected{count}</p>
    </div>
  )
}
const InjectSide = inject()(Side);