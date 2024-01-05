type HelloTSProps = {
  name: string,
};

const HelloTS = (props: HelloTSProps) => {
  return <h1>{props.name}</h1>;
};
