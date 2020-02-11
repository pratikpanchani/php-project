import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Files from "react-files";
import NavBar from "./navBar"
import Footer from './Footer';

class uploadPlayers extends React.Component {

    constructor() {
        super();
        this.state = {
            jsonFile: {},
            name: '',
            age: '',
            city: '',
            province: '',
            country: '',
            fileName: ''
        };

        this.fileReader = new FileReader();
        this.fileReader.onload = event => {
            try {

                this.setState({
                    jsonFile: JSON.parse(event.target.result)

                }, () => {
                    for (var i = 0; i < this.state.jsonFile.Players.length; i++) {
                        var player = this.state.jsonFile.Players[i];
                        var name = player.Name;
                        var age = player.Age;
                        // var location = player.Location;
                        var city = player.Location.City;
                        var prov = player.Location.Province;
                        var country = player.Location.Country;
                        this.submit(name, age, city, prov, country);
                    }
                    alert("Player(s) saved successfully!");
                });
            }
            catch (e) {
                alert("Error in JSON Text. Check and please Try Again!");
                window.location.href = "/upload";
            }
        };

    }

    onFilesError = (error, file) => {
        alert('Please Use Only JSON File');
        window.location.href = "/upload";
    }


    submit(s_name, s_age, s_city, s_province, s_country) {
        fetch('http://localhost/php-project/api/addplayer/', {
            method: 'POST',
            body: JSON.stringify({
                Name: s_name,
                Age: s_age,
                City: s_city,
                Province: s_province,
                Country: s_country
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.status === 200) {
                console.log("Success");
            }
        });
    }

    render() {
        return (
            <div>
                <NavBar />

                <Container>
                    <hr />
                    <Row>
                        <Col></Col>
                        <Col xs={10}>
                            <div className="files text-center">
                                <h3 className="font-weight-bold">Choose a JSON File:</h3>
                                <Files
                                    className="files-dropzone"
                                    onChange={file => {
                                        this.fileReader.readAsText(file[0]);
                                    }}
                                    onError={this.onFilesError}
                                    accepts={[".json"]}
                                    multiple
                                    maxFiles={3}
                                    maxFileSize={10000000}
                                    minFileSize={0}
                                    clickable
                                >
                                    <Button variant="btn btn-success btn-lg">Upload</Button>
                                </Files>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Footer />

                </Container>
            </div>
        );
    }
}

export default uploadPlayers;