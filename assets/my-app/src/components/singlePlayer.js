import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from "./navBar"
import Footer from './Footer';
import PageNotFound from './PageNotFound';

class singlePlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '', name: '', age: '', city: '', province: '', country: '' };
    }

    componentDidMount() {
        fetch('http://localhost/php-project/api/playerbyid?id=' + this.props.match.params.id)
            .then(response => {
                return response.json();
            }).then(result => {
                // console.log(result);
                this.setState({
                    id: result.id,
                    name: result.name,
                    age: result.age,
                    city: result.city,
                    province: result.province,
                    country: result.country
                });
            }).catch(err => {
                console.log("No Player with that ID");
            });
    }

    deletePlayers(id) {
        if (window.confirm("Are you sure want to delete?")) {
            fetch('http://localhost/php-project/api/deleteplayer/' + id, {
                method: 'DELETE'
            }).then(response => {
                if (response.status === 200) {
                    alert("Player deleted successfully");
                    window.location.href = "/players";
                }
            });
        }
    }

    render() {
        if (this.state.id === undefined) {
            return <PageNotFound/>
        }
        else{
        return (
            <div>
                <NavBar />
                <Container>

                    <hr />
                    <Row>
                        <Col></Col>
                        <Col xs={10}>
                            <div id="container">
                                <h2>{this.state.name}</h2>
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <th scope="row">AGE</th>
                                            <td>{this.state.age}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CITY</th>
                                            <td>{this.state.city}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">PROVINCE</th>
                                            <td>{this.state.province}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">COUNTRY</th>
                                            <td>{this.state.country}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <Link to="/players">
                                <Button variant="success">
                                    <span>Back</span>
                                </Button>
                            </Link>
                            &nbsp;
                        <button type="button" onClick={this.deletePlayers.bind(this, this.state.id)} className="btn btn-danger">Delete</button>
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

export default singlePlayer;