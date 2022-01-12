import React from 'react';

function App() {
    return (

        <div style={{
            background: '#f7f7f7',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
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
            <div style={{
                color: '#1e1e23',
                fontSize: 30,
                textAlign: 'center',
            }}>
                <p>Fullstack Developer</p>
                <p>React, Flutter, Firebase</p>
            </div>
        </div>
    );
}

export default App;
