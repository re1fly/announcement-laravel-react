import React, {Component} from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Announcement from "./Announcement";
import {Button, Card} from "react-bootstrap";

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
                        <Card className="text-center" style={{border: "none"}}>
                           <h3 className="mb-5 mt-4">Preview Announcement</h3>
                            <Card className="text-center" style={{ marginBottom: "10%", width: "50%", marginLeft:"25%", border: "none" }}>
                                <p className="mb-4">preview</p>
                        <Announcement />
                            <Button  className="mt-4" variant="secondary" type="submit" >
                                Save Announcement
                            </Button>
                            </Card>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;
