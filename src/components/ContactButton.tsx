import {theme} from "../constants/theme";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";


export const ContactButton = () => {
    return (
        <a href='mailto:mail@michaelguldborg.d'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                background: theme.colors.primary,
                padding: '6px 10px 6px 16px',
                borderRadius: 90,
                color: 'white',
                transition: 'background 0.5s ease 0s',
            }}>
                Contact
                <ArrowRightSLineIcon style={{
                    height: 18,
                    width: 18,
                    paddingTop: 2,
                }}/>
            </div>
        </a>
    )
}