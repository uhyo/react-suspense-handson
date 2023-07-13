import { sleep } from "../utils/sleep";
import { FC } from "react";

export const AlwaysSuspend: FC = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};
