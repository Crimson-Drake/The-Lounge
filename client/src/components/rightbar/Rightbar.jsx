import './rightbar.css';
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>King Dragonis</b> and <b>5 others</b> have a birthday today
                    </span>
                </div>
                <img
                    className="rightbarAd"
                    src="/assets/ESO_Dragonhold.jpg"
                    alt=""
                />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    { Users.map((u) => (
                        <Online key={ u.id } user={ u } />
                    ))}
                </ul>
            </div>
        </div>
    );
}