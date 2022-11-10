import './sideBar.scss';
import { Link } from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';



export default function Sidebar() {
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <Link to='/' className='link'>
                        <li className="sideBarListItem active">
                            <LineStyleIcon />
                            Home
                            </li>
                        </Link>
                        <li className="sideBarListItem">
                            <TimelineIcon />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUpIcon />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to='/users' className='link'>
                        <li className="sideBarListItem">
                            <PersonOutlineOutlinedIcon />
                            Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                        <li className="sideBarListItem">
                            <Inventory2OutlinedIcon />
                            Products
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <CurrencyExchangeOutlinedIcon />
                            Transaction
                        </li>
                        <li className="sideBarListItem">
                            <EqualizerOutlinedIcon />
                            Reports
                        </li>
                    </ul>
                </div>


                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <EmailOutlinedIcon />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <DynamicFeedOutlinedIcon />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutlineOutlinedIcon />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <ManageAccountsOutlinedIcon />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <TimelineIcon />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <EqualizerOutlinedIcon />
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}