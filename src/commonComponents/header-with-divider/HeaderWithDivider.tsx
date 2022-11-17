import "./header-with-divider.css";

interface HeaderWithDividerProps {
  title: string;
}

function HeaderWithDivider(props: HeaderWithDividerProps) {
  const { title } = props;
  return (
    <div className="header-with-divider">
      <h1>{title}</h1>
      <hr className="divider" />
    </div>
  );
}

export default HeaderWithDivider;
