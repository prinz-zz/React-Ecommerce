import './featuredInfo.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';

export default function Featuredinfo() {

    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income');
                setIncome(res.data);
                setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
            } catch (err) {
                
            }
        }
        getIncome();
    }, [])
    
    console.log(percentage);

    return (
        <div className="featuredinfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{ income[1]?.total }</span>
                    <span className="featuredMoneyRate">% {Math.floor(percentage)}
                        { percentage < 0 ? (<ArrowDownwardIcon className='featuredIcon negative' />)
                            : (<ArrowUpwardIcon className='featuredIcon'/>)
                        }
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">456</span>
                    <span className="featuredMoneyRate">-5.67 <ArrowDownwardIcon className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">567</span>
                    <span className="featuredMoneyRate">+5.67 <ArrowUpwardIcon className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}