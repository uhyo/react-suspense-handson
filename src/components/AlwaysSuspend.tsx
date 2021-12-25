import { sleep } from "../utils/sleep";

export const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
};
