import React, {Component} from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Announcement from "./Announcement";


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row" style={{height: "100%", width: "100%" }}>
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <Announcement />
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;
