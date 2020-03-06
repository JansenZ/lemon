import React from 'react';
export function Provider(Provider: any) {
    return function(Wrap: any) {
      return function() {
          return(
            <Provider>
                <Wrap />
            </Provider>
          )
      };
    }
}