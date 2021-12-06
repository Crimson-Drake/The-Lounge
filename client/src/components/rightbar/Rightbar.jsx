import './rightbar.css';
import { Users } from "../../dummyData";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">King Dragonis and 5 others have a birthday today</span>
                </div>
            </div>
        </div>
    );
}