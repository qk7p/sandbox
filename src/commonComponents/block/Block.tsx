import { BlockHeader } from "../block-header/BlockHeader";
import "./block.css";

export interface IBlockProps {
  headerTitle?: string;
  children?: React.ReactNode;
}

export function Block(props: IBlockProps) {
  const { headerTitle, children } = props;
  return (
    <section className="block">
      {headerTitle && <BlockHeader title={headerTitle} />}
      {children}
    </section>
  );
}
