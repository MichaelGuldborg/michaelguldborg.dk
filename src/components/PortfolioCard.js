import React from 'react';
import PropTypes from 'prop-types';
import "./PortfolioCard.css"
import Card from "@material-ui/core/Card/Card";

export default class PortfolioCard extends React.Component {

    render() {
        const {title, subtitle, url, image} = this.props;
        const hostName = url.substr(11);


        const description = subtitle === undefined ? hostName : subtitle;
        const imageUrl = image === undefined ?
            "https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1080,width:1080,delay:2000/crop=dim:[0,0,1080,720]/resize=width:600/" + url :
            image;

        console.log("title: " + title)
        console.log("description: " + description)
        console.log("url: " + url)
        console.log("imageUrl: " + imageUrl)

        return (
            <a className={"link"} href={url}>
                <div className={"PortfolioCard"}>
                    <img style={styles.image}
                         alt={""}
                         src={imageUrl}/>

                    <div style={styles.textContainer}>
                        {title}<br/>
                        <span style={{fontStyle: 'italic'}}>
                            {description}
                        </span>
                    </div>
                </div>
            </a>
        )
    }
}


PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
};


const styles = {
    image: {
        width: "100%",
        borderRadius: '3px',
    },
    textContainer: {
        paddingTop: '5px',
        paddingBottom: '10px',
        backgroundColor: "inherit"
    }
}

