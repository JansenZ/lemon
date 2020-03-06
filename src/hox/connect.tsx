import React, { createContext, useContext } from "react";
import useSetState from "../src/useSetState";
// import { useImmer } from "use-immer";

const ctx = createContext(null);
const { Provider } = ctx;

export const createPage = (useHook: any) => (Wrap: any) => (props: any) => {
  let value = useHook(props.initialState);
  return (
    <Provider value={value}>
      <Wrap {...{ ...props, ...value }}>{props.children}</Wrap>
    </Provider>
  );
};

export const inject = (fn?: any) => {
  return (ComponentUi: any) => {
    return (props: any) => {
      const value = useContext(ctx);
      const newVal = typeof fn == "function" ? fn(value) : value;
      return <ComponentUi {...{ ...newVal, ...props }} />;
    };
  };
};
