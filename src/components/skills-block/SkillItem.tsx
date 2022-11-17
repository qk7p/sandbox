import "./skill-item.css";

interface SkillItemProps {
  itemName: string;
  itemLogo?: React.ReactNode;
  itemPNGLogo?: string;
}

function SkillItem(props: SkillItemProps) {
  const { itemLogo, itemName, itemPNGLogo } = props;
  return (
    <div className="skill-item">
      {itemLogo}
      {itemPNGLogo ? (<img src={itemPNGLogo} alt="logo" />) : null}
      <p>{itemName}</p>
    </div>
  );
}

export default SkillItem;
