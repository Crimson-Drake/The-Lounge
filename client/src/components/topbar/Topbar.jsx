import './topbar.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">The Lounge</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search />
                    <input
                        placeholder="Search"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}