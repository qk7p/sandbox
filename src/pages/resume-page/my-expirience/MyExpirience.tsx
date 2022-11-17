import { Block } from "commonComponents/block/Block";
import HeaderWithDivider from "commonComponents/header-with-divider/HeaderWithDivider";
import SkillBlock from "components/skills-block/SkillBlock";
import SkillItem from "components/skills-block/SkillItem";
import { DixiLogo } from "assets/icons/job/dixi";
import "./my-expirience.css";

function MyExpirience() {
  const globousLogo = require("assets/icons/job/globous.png");
  const piLogo = require("assets/icons/job/pi.png");

  return (
    <div className="my-expirience">
      <Block>
        <HeaderWithDivider title="Опыт работы" />
        <div className="expirience-item-container">
          <div className="expirience-item">
            <img src={globousLogo} width="120" height="35" />
            <label>2012-2015</label>
            <p>Ведущий менеджер</p>
          </div>
          <div className="expirience-item">
            <img src={piLogo} width="120" height="35" />
            <label>2015-2017</label>
            <p>Менеджер-технолог</p>
          </div>
          <div className="expirience-item">
            {DixiLogo}
            <label>c 2017 г.</label>
            <p>Технолог</p>
          </div>
        </div>

        <SkillBlock title="Чем занимался:">
          <SkillItem itemName=" Выбирал оптимальные технологии для производства изделий." />
          <SkillItem
            itemName="Готовил
                  техническую документацию."
          />
          <SkillItem
            itemName="Организовал работу с
                  подрядчиками."
          />
        </SkillBlock>
        <SkillBlock title="Почему меняю:">
          <SkillItem
            itemName="В силу специфики профессии, нет возможности приобретать
                    самостоятельно новые навыки."
          />
          <SkillItem itemName="События последних лет сильно ударили по рекламной сфере." />
        </SkillBlock>
        <SkillBlock title="Ожидания от новой профессии:">
          <SkillItem itemName="Возможность постоянно развиваться и охватывать новые технологии." />
          <SkillItem
            itemName="Быть востребованным специалистом и реализовывать различные
                  идеи."
          />
        </SkillBlock>
      </Block>
    </div>
  );
}

export default MyExpirience;
