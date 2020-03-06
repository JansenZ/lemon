import React, { useContext, ReactElement } from 'react';

import { createPage, inject } from '../hox/connect';
import { Provider } from './provider';
import useB2CController from './useB2CController';
import NextPro from './nextPro';


export function Cart(props: any) {
    const { state, add, change, name,getByte } = props;
    const { count, color, datalist, loading } = state;
    console.log('???');
    return(
      <div>
          <div>
            <p>fetch start---------------</p>
                {
                  loading && <p>loading...</p>
                }
                {
                  datalist && datalist.map((item: any) =>{
                    return (<div key={item.name}>
                        <p>{item.name + '这是我名字' + item.sex}</p>
                    </div>)
                  })
                }
            <p>fetch end -----------------</p>
            <p onClick={getByte}>获取数据</p>
          </div>
          {props.children}
          <p>{count}</p>
          <p>{name}</p>
          <div onClick={add}>加起来222</div>
          <Side {...props} />
          <p>side-=================== 分割线</p>
          <InjectSide action={'照样给==='}/>
          <div style={{
            width:100,
            fontSize: '10px',
            border: '1px solid',
          }}>
            <span>哈哈</span>
          </div>
          <NextPro />
      </div>
    );
}
export default createPage(useB2CController)(Cart)

const Side = React.memo((props: any) => {
  const { state, action, change } = props;
  console.log('===', props);
  const { count, color } = state;
  return(
    <div>
        <p>{color}</p>
        <p>{action || '默认~'}</p>
        <p>injected{count}</p>
        <div onClick={change}>+b起来222</div>
    </div>
  )
});
const InjectSide = inject()(Side);

