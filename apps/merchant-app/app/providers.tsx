"use client";
import { Provider } from "react-redux";
import { useStore } from "@repo/store/useBalance";
//TODO: continue from here import store from store

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const store = useStore();
  return <Provider store={store}>{children}</Provider>;
};
