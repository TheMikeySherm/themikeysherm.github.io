import './body.css';

const Screen = (props) => {
    return (
        <body>
            {props.children}
        </body>
    )
}



const Container = (props) => {
    const containerStyle = {
        backgroundColor: '#082245',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    }

    const innerStyle = {
        maxWidth: '1000px',
        display: 'flex',
        flex: 1,
        borderTop: '1px solid #fff',
        padding: 5,
        marginLeft: 3,
        marginRight: 3,
    }
    return (
        <div style={containerStyle}>
            <div style={innerStyle}>
                {props.children}
            </div>
        </div>
    )
}

const Row = (props) => {
    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    }
    return (
        <div style={rowStyle}>
            {props.children}
        </div>
    )
}

const Col = (props) => {
    const colStyle = {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={colStyle}>
            {props.children}
        </div>
    )
}

const Cell = (props) => {
    const cellStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={cellStyle}>
            {props.children}
        </div>
    )
}



const Banner = (props) => {
    const bannerStyle = {
        position: 'fixed',
        minWidth: '100vw',
        top: 0,
        display: 'flex',
        borderBottom: '1px solid #eee',
        backgroundColor: '#11448b',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const innerStyle = {
        maxWidth: '1000px',
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
    return (
        <div style={bannerStyle}>
            <div style={innerStyle}>
                {props.children}
            </div>
        </div>
    )
}

const Avatar = (props) => {
    const avatarStyle = {
        maxHeight: 'calc(250px + 10.0vmin)',
        borderRadius: '50%',
        border: '3px solid #fff',
        marginTop: 50,
    }
    return (
        <img style={avatarStyle} src={props.src} alt={props.alt} />
    )
}

const Anchor = (props) => {
    const anchorStyle = {
        color: 'white'
    }
    return (
        <a href={props.href} target={props.target} style={anchorStyle}>
            {props.children}
        </a>
    )
}

const Image = (props) => {
    const iconStyle = {
        height: 'calc(75px + 10.0vmin)',
        width: 'calc(75px + 10.0vmin)',
        objectFit: 'contain',
        margin: 5
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
    )
}

const Logo = (props) => {
    const iconStyle = {
        height: 'calc(50px + 10.0vmin)',
        width: 'calc(50px + 10.0vmin)',
        objectFit: 'contain',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
    )
}

const LogoMini = (props) => {
    const iconStyle = {
        height: 'calc(25px + 5.0vmin)',
        width: 'calc(25px + 5.0vmin)',
        objectFit: 'contain',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
    )
}

const Icon = (props) => {
    const iconStyle = {
        height: 25,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
    )
}

const IconResize = (props) => {
    const iconStyle = {
        height: 'calc(25px + 5.0vmin)',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
    )
}

const Title = (props) => {
    const titleStyle = {
        fontSize: 'calc(10px + 3vmin)',
        fontStyle: 'italic',
        margin: 5,
        paggin: 3,
    }
    return (
        <div style={titleStyle}>
            {props.children}
        </div>
    )
}

const Para = (props) => {
    const paraStyle = {
        fontSize: 'calc(10px + 1.3vmin)',
        margin: 10,
        padding: 10,
        textAlign: 'center'
    }
    return (
        <div style={paraStyle}>
            {props.children}
        </div>
    )
}

const MiniText = (props) => {
    const minitextStyle = {
        fontSize: 'calc(10px + 1vmin)',
    }
    return (
        <div style={minitextStyle}>
            {props.children}
        </div>
    )
}

const Card = (props) => {
    const cardStyle = {
        border: '1px solid #1555ae',
        backgroundColor: '#0d3368',
        margin: 5,
        padding: 3
    }
    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    )
}



export {
    Screen, Container, Banner, Avatar, Row, Icon, Card, Para, Title, Col, Cell, Anchor, Logo, LogoMini, MiniText, IconResize, Image
}