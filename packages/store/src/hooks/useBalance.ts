import { useSelector } from "react-redux";
import appStore from "../utils/store";

export const useBalance = () => {
  //TODO: fix types later
  const balance = useSelector<unknown, number>(
    (store: any) => store.account.balance,
  );
  return balance;
};
export const useStore = () => {
  return appStore;
};
