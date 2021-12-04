import './sidebar.css';
import { RssFeed } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}