import React, {Component} from 'react';

import './App.css';
import assets from "./constants/assets";
import images from "./constants/images";
import Grid from "@material-ui/core/Grid/Grid";
import PortfolioCard from "./components/PortfolioCard";
//ui components
//https://material-ui.com/demos/buttons/

//css mask transitions
//https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        //wave canvas
        this.initWaveCanvas();


        /*
        const canvas = document.getElementById("canvas");
        this.setCanvasSize(canvas);

        setCanvasSize(canvas) {
            const displayWidth = window.document.body.clientWidth; //canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
            }
        }

        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        context.strokeStyle = '#000';
        const drawMap = function () {
            context.clearRect(0, 0, width, height);
            context.fillStyle = 'rgb(255,0,0)';
        };
        //setInterval(drawMap, 1000 / 30);
        */
    }

    initWaveCanvas() {

        //https://codepen.io/sebavien/pen/WGGmEo?editors=0010

        const wavecvs = document.getElementById("waveCanvas");
        wavecvs.width = document.documentElement.clientWidth;
        wavecvs.height = 300;

        const wavectx = wavecvs.getContext("2d");
        const height = wavecvs.height;
        const width = wavecvs.width;

        const xAxis = Math.floor(height / 2);
        const yAxis = 0;
        const unit = 60;

        function draw() {
            wavectx.clearRect(0, 0, width, height);// キャンバスの描画をクリア
            drawWave('#FFFFFF', 1, 3, 0);//波を描画（fillcolor, alpha, zoom, delay）

            // Update the time and draw again
            draw.seconds = draw.seconds + .009;
            draw.t = draw.seconds * Math.PI;
            setTimeout(draw, 35);
        };
        draw.seconds = 0;
        draw.t = 0;
        draw();


        function drawWave(fillcolor, alpha, zoom, delay) {
            wavectx.fillStyle = fillcolor;
            wavectx.globalAlpha = alpha;

            wavectx.beginPath(); //パスの開始
            drawSine(draw.t / 0.5, zoom, delay);
            wavectx.lineTo(width + 10, height); //パスをCanvasの右下へ
            wavectx.lineTo(0, height); //パスをCanvasの左下へ
            wavectx.closePath() //パスを閉じる
            wavectx.fill(); //塗りつぶす
        }

        function drawSine(t, zoom, delay) {
            let x = t; //時間を横の位置とする
            let y = Math.sin(x) / zoom;
            wavectx.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

            // Loop to draw segments (横幅の分、波を描画)
            for (let i = yAxis; i <= width + 10; i += 10) {
                x = t + (-yAxis + i) / unit / zoom;
                y = Math.sin(x - delay) / 3;
                wavectx.lineTo(i, unit * y + xAxis);
            }
        }
    }


    render() {
        return (
            <div>

                <div style={styles.canvasContainer}>
                    <canvas id="canvas" style={styles.canvas}>
                        {/*fallback*/}
                    </canvas>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <span style={{
                            width: '200px', height: '200px', lineHeight: '200px',
                            textAlign: 'center', color: 'white', fontSize: '80px',
                            borderRadius: '100%', border: '3px solid white',
                            marginTop: '-40px', marginBottom: '40px'
                        }}>MG</span>
                        <span style={{color: 'white', fontSize: '30px'}}>Professional Android Development</span>
                    </div>
                </div>

                <canvas id="waveCanvas" style={{backgroundColor: '#1e1e23'}}/>

                <div style={{padding: "40px", marginTop: '10vh', paddingBottom: "80px", overflow: 'hidden'}}>
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
        backgroundColor: '#1e1e23',
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
    canvasLogoImage: {
        width: '16vw',
        height: '16vw',
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
