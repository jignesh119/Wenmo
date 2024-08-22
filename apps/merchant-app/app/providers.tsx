"use client";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
//TODO: continue from here import store from store

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={}>{children}</Provider>;
};
