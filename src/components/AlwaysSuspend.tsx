import { sleep } from "../utils/sleep";

export const AlwaysSuspend: React.FC = () => {
  throw sleep(1000);
};
