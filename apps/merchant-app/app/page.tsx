"use client";

import { useBalance } from "@repo/store/useBalance";

export default function () {
  const balance = useBalance();
  return <div>merchant balance {balance}</div>;
}
