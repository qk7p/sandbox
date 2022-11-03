import { Block } from "commonComponents/block/Block";
import { useAppSelector } from "hooks/useAppSelector";
import { selectUser } from "store/slices/userSlice";
import "./welcome-page.css";

function WelcomePage() {
  const myPhoto = require("../../images/me.jpg");
  const user = useAppSelector(selectUser);

  return (
    <div className="welcomePage">
      <div className="personalInfo">
        <Block>
          <div className="myInfo">
            <img src={myPhoto} className="myPhoto" />
            <div>email: = {user?.email}</div>
            <div>aT = {user?.refresh_token}</div>
            <div>rT ={user?.access_token}</div>
          </div>
        </Block>
        <div className="projectsInfo"></div>
      </div>
    </div>
  );
}

export default WelcomePage;
