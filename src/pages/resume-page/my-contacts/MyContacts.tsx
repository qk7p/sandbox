import { Block } from "commonComponents/block/Block";
import "./my-contacts.css";

function MyContacts() {
  return (
    <div className="my-contacts">
      <Block>
        <h1>Дмитрий Морозов</h1>
        <label>Front-end разработчик</label>
        <p>Телефон: +7-968-647-20-77</p>
        <p>Почта: d.morozov@qk7s.ru</p>
        <p>Сайт: www.qk7p.ru</p>
        <p>Место обитания: Московская область, г. Раменское</p>
      </Block>
    </div>
  );
}

export default MyContacts;
