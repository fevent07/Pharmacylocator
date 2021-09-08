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


// let barData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//         label: 'medicine',
//         backgroundColor: '#1e88e5',
//         borderColor: '#1e88e5',
//         data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
//     },
//     {
//         label: 'product',
//         backgroundColor: '#7460ee',
//         borderColor: '#7460ee',
//         data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
//     }]
// };

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
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
                                    <div>
                                        <div className='header'>
                                            <h1 className='title'>Search Analysis</h1>
                                        </div>
                                    </div>
                                    <Row>
                                        <Col lg="12">
                                            <div className="campaign ct-charts">
                                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                                    <Bar data={data} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" }, barThickness: 15 }] } }} />
                                                    {/* <Bar data={barData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" }, barThickness: 15 }] } }} /> */}
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