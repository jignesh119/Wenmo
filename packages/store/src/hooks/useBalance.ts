import { useRecoilValue } from "recoil";
import { balanceAtom } from "../atoms/balance";
import { useSelector } from "react-redux";
import appStore from "../utils/store";

export const useBalance = () => {
  //TODO: fix types later
  const balance = useSelector<unknown, number>(
    (store: any) => store.account.balance,
  );
  // const value = useRecoilValue(balanceAtom);
  return balance;
};
export const useStore = () => {
  return appStore;
};
