import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <Link to={'/'} style={{textDecoration: 'none'}}>
            <h2 style={{fontSize: 28, fontWeight: 400,}}>
                <img src={'/logo192.png'} alt={'Logo'} width={80}/>
            </h2>
        </Link>
    )
}

export default Logo;