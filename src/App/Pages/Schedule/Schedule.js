import React from 'react';
import './Schedule.css';
import Sched from '../../Components/Sched/Sched.js'
import PageHeader from '../../Components/PageHeader/PageHeader.js';

class Schedule extends React.Component{
    render(){
        return(
            <div>
                <PageHeader
                header="Schedule"
                detail="Weekend events are listed below, and downloadable below."
                >
                </PageHeader>
                <Sched>

                </Sched>
                <div className="downloadScheduleFooter">
                    <div className="downloadScheduleText">
                        Click <a href ="https://calendar.google.com/calendar/b/1?cid=Y2Zlcy5jYV90NmFlYTNxNWNnNjQ2aTRoZjFuaDI4bGU4b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">here</a> to download the event schedule.
                    </div>
                </div>
            </div>
        );
    }
}
export default Schedule;