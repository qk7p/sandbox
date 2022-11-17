import { Block } from "commonComponents/block/Block";
import SkillBlock from "components/skills-block/SkillBlock";
import SkillItem from "components/skills-block/SkillItem";
import { BirdLogo } from "assets/icons/hobbies/bird";
import { FishingLogo } from "assets/icons/hobbies/fishing";
import { CSSLogo } from "assets/icons/technologies/css";
import { HTMLLogo } from "assets/icons/technologies/html";
import { ReactLogo } from "assets/icons/technologies/react";
import { ReduxLogo } from "assets/icons/technologies/redux";
import { TypescriptLogo } from "assets/icons/technologies/typescript";
import "./my-skills.css";

function MySkills() {
  return (
    <div className="my-skills">
      <Block>
        <SkillBlock
          title="Изучаемые технологии:"
          additionalClass="space-around"
        >
          <SkillItem itemName="HTML" itemLogo={HTMLLogo} />
          <SkillItem itemName="CSS" itemLogo={CSSLogo} />
          <SkillItem itemName="Typescript" itemLogo={TypescriptLogo} />
          <SkillItem itemName="React" itemLogo={ReactLogo} />
          <SkillItem itemName="Redux Toolkit" itemLogo={ReduxLogo} />
        </SkillBlock>
        <SkillBlock title="Личные навыки:">
          <SkillItem itemName="Английский уровня А2 - В1" />
          <SkillItem itemName="Осознанность" />
          <SkillItem itemName="Коммуникабельность" />
          <SkillItem itemName={`Шутки за "300"`} />
        </SkillBlock>
        <SkillBlock
          title="Увлечения в свободное время:"
          additionalClass="space-around"
        >
          <SkillItem
            itemName="Кастинг & Спининг & Нахлыст"
            itemLogo={FishingLogo}
          />
          <SkillItem itemName="Бёрдвотчинг" itemLogo={BirdLogo} />
        </SkillBlock>
      </Block>
    </div>
  );
}

export default MySkills;
