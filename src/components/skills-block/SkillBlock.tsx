import "./skill-block.css";

interface SkillBlockProps {
  title: string;
  children: React.ReactNode;
  additionalClass?: string;
}

function SkillBlock(props: SkillBlockProps) {
  const { title, children, additionalClass } = props;

  return (
    <div className="skill-block">
      <h1>{title}</h1>
      <hr className="divider" />
      <div className={`item-container + ${additionalClass}`}>{children}</div>
    </div>
  );
}

export default SkillBlock;
