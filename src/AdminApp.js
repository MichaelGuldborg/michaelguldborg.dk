import React, {Component} from 'react';
import './App.css';
import {firestore} from "./api/firebase/index";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField/TextField";
import filestack from "./api/filestack/filestack";


export default class AdminApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            websites: []
        }

    }

    componentDidMount() {
        firestore.getAllWebsites((querySnapshot) => {
            let websites = [];
            querySnapshot.forEach((doc) => {
                const id = doc.id;
                const {url, imageUrl} = doc.data();
                websites.push({
                    id: id,
                    url: url,
                    imageUrl: imageUrl,
                })
            });
            this.setState({websites: websites});
            console.log(websites)
        })
    }

    handleAddButtonPress() {
        const {name, url} = this.state;
        const imageUrl = filestack.getUrlScreenShot(url)
        firestore.setWebsite(name, url, imageUrl);
    }

    render() {
        return (
            <div>
                <div className={"topRightContainer"}>
                    <Link className={"link"} to={"/"}>
                        <Button onClick={() => console.log("Pressed exit button")}>
                            Exit Admin
                        </Button>
                    </Link>
                </div>

                <p style={{margin: 20}}>admin page</p>

                {this.state.websites.map((website) =>
                    <div key={website.id}>
                        <span style={{marginLeft: 20}}>{website.id}</span>
                        <span style={{marginLeft: 20}}>{website.url}</span>
                        <Button style={{marginLeft: 20}} variant={"outlined"}
                                onClick={() => firestore.deleteWebsite(website.id)}>delete</Button>
                    </div>
                )}

                <div style={{marginLeft: 20}}>
                    <TextField
                        label={"name"}
                        onChange={(event) => this.setState({name: event.target.value})}
                        margin="normal"
                    />
                    <TextField
                        label={"url"}
                        onChange={(event) => this.setState({url: event.target.value})}
                        margin="normal"
                    />
                    <Button variant="outlined"
                            style={{margin: 20}}
                            onClick={() => this.handleAddButtonPress()}>
                        Add
                    </Button>

                </div>
            </div>
        );
    }

}
