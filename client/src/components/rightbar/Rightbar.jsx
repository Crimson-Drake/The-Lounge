import './rightbar.css';
// import { Users } from "../../dummyData";

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/dp.jpg"
                                alt=""
                            />
                            <span className="rightbarOnline">
                                
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}