import { Block } from "commonComponents/block/Block";
import SkillBlock from "components/skills-block/SkillBlock";
import SkillItem from "components/skills-block/SkillItem";
import "./recommendations.css";

function Recommendations() {
  return (
    <div className="recommendation">
      <Block>
        <SkillBlock title="Контакты коллег:">
          <SkillItem
            itemName="Сергей, руководитель конструкторско-технологического
                  отдела: +7-123-12-12"
          />
          <SkillItem itemName="Сергей, генеральный директор: +7-123-12-12" />
          <SkillItem itemName="Инна, руководитель отдела продаж: +7-123-12-12" />
        </SkillBlock>
      </Block>
    </div>
  );
}

export default Recommendations;
