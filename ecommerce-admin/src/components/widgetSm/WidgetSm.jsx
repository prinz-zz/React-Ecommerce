import './widgetSm.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';



export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);


    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">

                {users.map((user) => ( 
                <li className="widgetSmListItem" key={user._id}>
                    <img src={ user.img || "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.username}</span>
                        
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                    </li>
                    ))}
            </ul>
        </div>
    )
}