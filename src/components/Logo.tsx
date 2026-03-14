import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <Link to={'/'} style={{textDecoration: 'none'}}>
            <img src={'/logo192.png'} alt={'Logo'} width={80}/>
        </Link>
    )
}

export default Logo;
