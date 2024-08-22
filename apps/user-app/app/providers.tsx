"use client";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { useStore } from "@repo/store/useBalance";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const store = useStore();
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};
