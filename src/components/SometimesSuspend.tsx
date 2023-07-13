import { sleep } from "../utils/sleep";
import { FC } from "react";

export const SometimesSuspend: FC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};
