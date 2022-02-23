import { props } from 'bluebird';
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center'
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
        flexDirection: 'column',
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
        flexGrow: 2,
        flexShrink: 1,
        flexBasis: 'auto'
    }
    return (
        <div style={cellStyle}>
            {props.children}
        </div>
    )
}

const Avatar = (props) => {
    const avatarStyle = {
        maxHeight: 250,
        borderRadius: '50%',
        border: '3px solid #fff',
        margin: 5,
    }
    return (
        <img style={avatarStyle} src={props.src} alt={props.alt} />
    )
}

const Center = (props) => {
    const centerStyle = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div style={centerStyle}>
            {props.children}
        </div>
    )
}


const Code = (props) => {
    return (
        <pre>
            <code>
                {props.children}
            </code>
        </pre>
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


const Logo = (props) => {
    const iconStyle = {
        height:'calc(50px + 10.0vmin)',
        width:'calc(50px + 10.0vmin)',
        objectFit:'contain',
        marginTop:10,
        marginBottom:10,
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
        marginBottom:5,
        marginLeft:10,
        marginRight:10,
    }
    return (
        <img src={props.src} alt={props.alt} style={iconStyle} />
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

const Title = (props) => {
    const titleStyle = {
        fontSize: 'calc(10px + 3vmin)',
        textDecoration:'underline'
    }
    return (
        <div style={titleStyle}>
            {props.children}
        </div>
    )
}

const Para = (props) => {
    const paraStyle = {
        fontSize:'calc(10px + 1.3vmin)',
        margin:10,
        padding:10,
        textAlign:'center'
    }
    return (
        <div style={paraStyle}>
             {props.children}
        </div>
    )
}


const SpaceEvenly = (props) => {
    const spaceEvenlyStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'space-between'
    }
    return (
        <div style={spaceEvenlyStyle}>
            {props.children}
        </div>
    )
}

const Separate = () => {
    const separateStyle = {
        backgroundColor: '#082245',
        display:'flex',
    }
    const hrStyle = {
        maxWidth:1000,
        display:'flex',
        flex:1,
        border:0,
        height:'1px',
        borderImage:'linear-gradient(to right, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0))',
    }
    return (
        <div style={separateStyle}>
            <hr style={hrStyle}/>
        </div>
    )
}

export {
    Screen,
    Container,
    Banner,
    Card,
    Row,
    SpaceEvenly,
    Separate,
    Col,
    Cell,
    Title,
    Para,
    Anchor,
    Avatar,
    Icon,
    Logo,
    Center,
    Code
}