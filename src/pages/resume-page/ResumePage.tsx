import { Block } from "commonComponents/block/Block";
import MyContacts from "./my-contacts/MyContacts";
import MyExpirience from "./my-expirience/MyExpirience";
import MySkills from "./my-skills/MySkills";
import Recommendations from "./recommendations/Recommendations";
import "./resume-page.css";

function ResumePage() {
  const myPhoto = require("assets/images/me.jpeg");

  return (
    <div className="resumePage">
      <div className="myInfo">
        <div className="generalInfo">
          <Block>
            <img src={myPhoto} className="myPhoto" alt="Стою улыбаюсь в лесу" />
          </Block>
          <MyContacts />
        </div>
        <div className="mainInfo">
          <MySkills />
          <MyExpirience />
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
