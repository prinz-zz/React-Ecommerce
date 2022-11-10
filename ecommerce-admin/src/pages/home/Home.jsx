import React, { useMemo, useState, useEffect } from 'react';
import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
//import { userData } from '../../data';
import { userRequest } from '../../requestMethod';

export default function Home() {

    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(
        () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec",],
          []
        );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats');
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        {
                            name: MONTHS[item._id - 1],
                            'Active user': item.total
                        },
                    ])
                );
            } catch (err) {
                
            }
        }
        getStats();    
        },[MONTHS])
   
    //console.log(userStats);
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userStats} title='User Analytics' grid dataKey="Active User" />
            <div className='homeWidgtes'>
            <WidgetSm />
            <WidgetLg/>
            </div>
        </div>
    )
}