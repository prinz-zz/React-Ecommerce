import './topBar.scss';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <Link to={'/'}><span className="logo">pgAdmin</span></Link>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2 </span>
                    </div>
                    <div className="topbarIcons">
                        <LanguageIcon/>
                        <span className="topIconBadge">2 </span>
                    </div>
                    <div className="topbarIcons">
                        <SettingsIcon/>
                    </div>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' className='imgAvatar' alt=''/>
                </div>
            </div>
            
        </div>
        
    )
}