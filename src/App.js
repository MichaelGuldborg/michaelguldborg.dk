import React, {Component} from 'react';
import './App.css';
import images from "./constants/images";
import Grid from "@material-ui/core/Grid/Grid";
import PortfolioCard from "./components/PortfolioCard";
import assets from "./constants/assets";

//ui components
//https://material-ui.com/demos/buttons/

//css mask transitions
//https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
        }

    }

    componentDidMount() {

        const canvas = document.getElementById("canvas");
        App.setCanvasSize(canvas);

        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        context.strokeStyle = '#000';
        const drawMap = function () {
            context.clearRect(0, 0, width, height);
            context.fillStyle = 'rgb(255,0,0)';
        };
        setInterval(drawMap, 1000 / 30);
    }

    static setCanvasSize(canvas) {
        const displayWidth = window.document.body.clientWidth; //canvas.clientWidth;
        const displayHeight = canvas.clientHeight;

        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
        }
    }

    render() {
        return (
            <div>
                <a href="/">
                    <img className="logo-image hover-shadow" src={images.logo} alt={"logo"}/>
                </a>

                <div id={"canvasContainer"} style={styles.canvasContainer}>
                    <canvas id={"canvas"} style={styles.canvas}>
                        {/*fallback*/}
                    </canvas>
                    <p style={styles.canvasText}>
                        Hey, I'm Michael Guldborg<br/>
                        I'm an android app developer!
                    </p>
                </div>

                <div style={{padding: "40px", paddingBottom: "80px", overflow: 'hidden'}}>
                    <h1 style={{
                        textAlign: 'center',
                        marginTop: "0px",
                        marginBottom: "40px",
                        padding: "40px",
                        marginLeft: '-100%',
                        marginRight: '-100%'
                    }}>
                        Portfolio
                    </h1>
                    <Grid container spacing={32} style={styles.container}>
                        <PortfolioCard
                            title={"Lead Android Developer"}
                            url={"http://www.minejendom.dk"}/>
                        <PortfolioCard
                            title={"Single Page Promotion"}
                            url={"http://www.cmn-consulting.dk"}/>
                        <PortfolioCard
                            title={"Java Tutoring"}
                            subtitle={"portfolio/javatutoring"}
                            url={"http://www.michaelguldborg.dk/javatutoring"}/>
                        <PortfolioCard
                            title={"React-Native App"}
                            subtitle={"WeSpace.zip"}
                            url={assets.we_space}
                            image={images.we_space}/>
                        <PortfolioCard
                            title={"Desktop Java Game"}
                            subtitle={"Gorillas.jar"}
                            url={assets.gorillas}
                            image={images.gorillas}/>
                        <PortfolioCard
                            title={"Discrete Math Calculator"}
                            subtitle={"DenDiskreteMaskine.jar"}
                            url={assets.discrete_math_calc}
                            image={images.discrete_math_calc}/>
                    </Grid>
                </div>


            </div>
        );
    }

}

const styles = {
    canvasContainer: {
        width: "100%",
        height: "100vh",
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        //background: "#f5f5f5",
    },
    canvas: {
        position: 'absolute',
        height: 'inherit',
        overflow: 'hidden',
    },
    canvasText: {
        position: 'absolute',
        zIndex: '10',
        margin: "0px",
        paddingBottom: "80px",
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'Medium',
    },
    container: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
    },
    topRightContainer: {
        position: 'absolute',
        zIndex: 10,
        top: 0,
        right: 0,
        marginTop: 20,
        marginRight: 40,
        height: 80,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    button: {
        marginLeft: 10,
    }
    ,
    textField: {
        marginLeft: 20,
    },

}

/*
const appStyles = {
    image: {
        width: 150,
        height: 150,
    },
    imageWithShadow: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 6,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, 0.2)",
    }
}
*/
