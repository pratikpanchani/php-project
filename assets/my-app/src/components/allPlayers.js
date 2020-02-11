import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Row, Container, Col } from 'react-bootstrap';
import NavBar from "./navBar"
import Footer from './Footer';

class allPlayers extends React.Component {

    constructor(props) {
        super(props);
        this.state = { players: [] };
        this.headers = [
            { key: 'id', label: 'ID' },
            { key: 'Name', label: 'Name' },
            { key: 'Age', label: 'Age' },
            { key: 'Location', label: 'Location' },
        ];
        this.deletePlayers = this.deletePlayers.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost/php-project/api/players/')
            .then(response => {
                return response.json();
            }).then(result => {
                // console.log(result);
                this.setState({
                    players: result
                });
                // console.log(this.state.players);
            }).catch(err => {
                alert("No Players Found!");
            });
    }

    deletePlayers(id) {
        if (window.confirm("Are you sure want to delete?")) {
            fetch('http://localhost/php-project/api/deleteplayer/' + id, {
                method: 'DELETE'
            }).then(response => {
                if (response.status === 200) {
                    alert("Player deleted successfully");
                    fetch('http://localhost/php-project/api/players/')
                        .then(response => {
                            return response.json();
                        }).then(result => {
                            // console.log(result);
                            this.setState({
                                players: result
                            });
                        });
                }
            });
        }
    }

    render() {
        if (this.state.players === "No record found") {
            return (
                <div>
                    <NavBar />

                    <Container>
                        <hr />
                        <Row>
                            <Col></Col>
                            <Col xs={12}>
                                <p />
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            {
                                                this.headers.map(function (h) {
                                                    return (
                                                        <th key={h.key}>{h.label}</th>
                                                    )
                                                })
                                            }
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Footer />
                    </Container>
                </div>
            )
        }
        else {
            return (
                <div>
                    <NavBar />
                    <Container>

                        <hr />
                        <Row>
                            <Col></Col>
                            <Col xs={12}>
                                <p />
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            {
                                                this.headers.map(function (h) {
                                                    return (
                                                        <th key={h.key}>{h.label}</th>
                                                    )
                                                })
                                            }
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.players.map((item, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{item.id}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Age}</td>
                                                    <td>{item.City}, {item.Province}, {item.Country}</td>
                                                    <td>
                                                        <Link to={`/player/${item.id}`} >View</Link>
                                                        &nbsp;
                                                <Link onClick={this.deletePlayers.bind(this, item.id)}>Delete</Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Footer />
                    </Container>
                </div>
            );
        }
    }
}

export default allPlayers;