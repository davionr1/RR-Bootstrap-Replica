import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

export default function TopBar(){
    return(
        <div>
    <Navbar bg='success' expand='lg'>
        <Navbar.Brand style={{
            margin: '5px 0 0 20px', 
            width: '100%',
            // backgroundColor: '#09624B',
            // minWidth: '1024px',
            display:' flex',
            webkitBoxPack: 'start',
            webkitJustifyContent: 'flex-start',
            msFlexPack: 'start',
            justifyContent: 'flex-start',
            webkitAlignItems: 'center',
            webkitBoxAlign: 'center',
            msFlexAlign: 'center',
            alignItems: 'center',
            webkitFlexDirection: 'row',
            flexDirection: 'row',
            height: '80px',
            paddingLeft: '24px',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 -1px 0 rgb(0 0 0 / 9%)',
        }} 
            href='#home'>
                <img src="instacart-logo.webp"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
            <InputGroup 
            style={{
                display: 'flex',
                webkitAlignItems: 'center',
                webkitBoxAlign: 'center',
                msFlexAlign: 'center',
                alignItems: 'center',
                position: 'relative',
                minWidth:"90em",
                width: '100%',
                padding: '12px 0',
                marginBottom: '0px',
                border: '0',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: 'transparent',
                textIndent: '0',
                color: '#343538',
                outline: '0',
                paddingTop: '1em',
                paddingBottom: '0',
                paddingLeft: '16px',
                height: '100%',
                webkitAppearance: 'none',
                mozAppearance: 'none',
                appearance: 'none',
                paddingRight: '16px',
                lineHeight: '22px',
                fontWeight: '600', 
            }}
            className="mb-3">
                <Form.Control placeholder="Search products, stores, and recipes" aria-label='input' />
            </InputGroup>
                <Nav className="mr-auto"></Nav>
                <Nav style={{
                       padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex", 
                  }} >
                    <Nav.Link style={{
                        border: 'none',
                        margin: '0px 0px 0px 12px',
                        cursor: 'pointer',
                        userSelect: 'none',
                        touchAction: 'manipulation',
                        position: 'relative',
                        fontSize: '15px',
                        lineHeight: '22px',
                        fontWeight: '600',
                        color: 'rgb(255, 255, 255)',
                        height: '48px',
                        minWidth: '82px',
                        borderRadius: '48px',
                        padding: '12px 31px',
                        backgroundColor: 'rgb(10, 173, 10)',
                        webkitBoxAlign: 'center',
                        alignItems: 'center',
                        whiteSpace: 'noWrap',
                        }}
                        href='#Login'>Log In</Nav.Link>
                    <Button style={{
                        margin: '0px 0px 0px 12px',
                        cursor: 'pointer',
                        userSelect: 'none',
                        touchAction: 'manipulation',
                        backgroundColor: 'rgb(246, 247, 248)',
                        color: 'rgb(52, 53, 56)',
                        borderRadius: '48px',
                        display: 'flex',
                        flexDirection: 'row',
                        border: 'none',
                        padding: '8px 12px',
                        position: 'relative',
                        height: '48px',
                        minWidth: '82px',
                        fontSize: '15px',
                        lineHeight: '22px',
                        fontWeight: '600',
                        alignItems: 'center',
                        whiteSpace: 'noWrap',
                    }}
                    variant="success">Sign up</Button>{''}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
)
}