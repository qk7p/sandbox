import "./block-header.css";

export interface IBlockHeaderProps {
  title: string;
}

export function BlockHeader(props: IBlockHeaderProps) {
  const { title } = props;
  return (
    <div className="blockHeader">
      <p>{title}</p>
      <hr />
    </div>
  );
}
