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
            </div>
        </div>
    );
}