"use client";

//NOTE:
//@ts-ignore
import { useBalance } from "@repo/store/useBalance";

export default function () {
  const balance = useBalance();
  return <div>your balance: 0$ {balance}</div>;
}
