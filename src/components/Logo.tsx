import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <Link to={'/'} style={{textDecoration: 'none'}}>
            <h2 style={{fontSize: 28, fontWeight: 400,}}>
                Michael Guldborg
                {/*<span style={{color: 'rgb(255, 104, 95)', fontWeight: 900}}>.</span>*/}
            </h2>
        </Link>
    )
}

export default Logo;