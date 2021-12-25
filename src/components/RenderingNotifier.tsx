type Props = {
  name: string;
};

export const RenderingNotifier: React.VFC<Props> = ({ name }) => {
  console.log(`${name} is rendered`);

  return null;
};
