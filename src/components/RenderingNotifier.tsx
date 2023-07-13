import { FC } from "react";

type Props = {
  name: string;
};

export const RenderingNotifier: FC<Props> = ({ name }) => {
  console.log(`${name} is rendered`);

  return null;
};
