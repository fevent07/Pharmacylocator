import { React, } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from "../../components/pharma/Sidebar/sidebar";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/PharmaNavbar';
import "../style.css"
let rFactor = function () {

    return Math.round(Math.random() * 100);
};


let barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'medicine',
        backgroundColor: '#1e88e5',
        borderColor: '#1e88e5',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'product',
        backgroundColor: '#7460ee',
        borderColor: '#7460ee',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

const PharmaHome = () => {
    const classes = useStyles();
    return (
        <div >
            <Navbar />
            <div className="home1">
                <div className="side" > <Sidebar /></div>
                <div className="home">
                    <div>
                        <br />
                        <Col sm={4} lg={10}>
                            <Card style={{ height: '40%' }}>
                                <CardBody>
                                    <div className="d-flex align-items-center" >
                                        <div>
                                            <CardTitle>Sales Summary</CardTitle>
                                            <CardSubtitle>summary of the month</CardSubtitle>
                                        </div>
                                        <div className="ml-auto d-flex align-items-center">
                                            <ul className="list-inline font-12 dl mr-3 mb-0">
                                                <li className="border-0 p-0 text-info list-inline-item">
                                                    <i className="fa fa-circle"></i> medicine
                                                </li>
                                                <li className="border-0 p-0 text-primary list-inline-item">
                                                    <i className="fa fa-circle"></i> product
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Row>
                                        <Col lg="12">
                                            <div className="campaign ct-charts">
                                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                                    <Bar data={barData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" }, barThickness: 15 }] } }} />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    <br />
                    <div>
                        <Col sm={4} lg={10}>
                            <Card style={{ width: '100%' }}>
                                <CardBody>
                                    <div>
                                        <div>
                                            <Link exact to="/ViewMedicine" activeClassName="activeClicked" >
                                                <Button variant="outlined" size="small" color="primary" className={classes.margin} style={{
                                                    width: '420px',
                                                    height: '60px', left: '40px'

                                                }}>

                                                    View Medicine
                                                </Button>
                                            </Link>
                                            <Link exact to="/ManageMedicine" activeClassName="activeClicked">
                                                <Button variant="outlined" size="medium" color="primary" className={classes.margin} style={{
                                                    width: '420px',
                                                    height: '60px', left: '40px'
                                                }}>
                                                    Manage Medicine
                                                </Button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link exact to="/ManageProfile" activeClassName="activeClicked">
                                                <Button variant="outlined" size="small" color="primary" className={classes.margin} style={{
                                                    width: '420px',
                                                    height: '60px', left: '40px'
                                                }}>
                                                    Manage Profile
                                                </Button>
                                            </Link>
                                            <Link exact to="/FeedbackPh" activeClassName="activeClicked">
                                                <Button variant="outlined" size="medium" color="primary" className={classes.margin} style={{
                                                    width: '420px',
                                                    height: '60px', left: '40px'
                                                }}>
                                                    Send Feedback
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                </div >
            </div >
        </div>
    );
}

export default PharmaHome;