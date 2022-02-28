
const API_KEY = process.env.REACT_APP_SEND_GRID_API_KEY ?? '';
export const sendEmail = ({to, from, subject, content}: {
    to: string, from: string, subject: string, content: string,
}) => {

    fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
        },
        "body": JSON.stringify({
            "personalizations": [
                {
                    "to": [{"email": to}],
                    "subject": subject
                }
            ],
            "from": {"email": from},
            "content": [{
                "type": "text/plain",
                "value": content
            }]
        })
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}
export default sendEmail;