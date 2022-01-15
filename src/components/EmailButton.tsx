import React from "react";

export const EmailButton = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 8,
            color: '#1e1e23',
            textAlign: 'right',
            alignItems: 'right',
        }}>
            <a
                href="mailto:mail@michaelguldborg.dk"
                target="_top"
                style={{
                    marginRight: 24,
                    fontSize: 16,
                }}
            >
                mail@michaelguldborg.dk
            </a>
        </div>
    )
}
export default EmailButton;