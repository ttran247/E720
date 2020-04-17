import React from "react"
import entertainment720 from '../img/E720Logo.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { OverrideMaterialUICss } from "override-material-ui-css"


const options = [
    'Our Mission',
    'Contact',
    'Service',
    'Career',

];

const ITEM_HEIGHT = 48;

function NavigationBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <OverrideMaterialUICss className="overide"> 
                <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper" classes={{ root: 'my-root-class' }}>

                <MenuIcon
                    display="flex" flexDirection="row-reverse"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </MenuIcon>
            
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '30ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
                </Box>

                </OverrideMaterialUICss> 



            <section className="webPos">
                <header id="webContainer">
                    <img className="navImage" src={entertainment720} />
                    <div className='navContainterWeb'>
                        <ul className='navWeb'>
                            <li><a href="default.asp" className="webLink">Our Mission</a></li>
                            <li><a href="contact.asp" className="webLink">Contact</a></li>
                            <li><a href="news.asp" className="webLink">Service</a></li>
                            <li><a href="about.asp" className="webLink">Career</a></li>
                        </ul>
                    </div>
                </header>
            </section>
             </>
    )
}

export default NavigationBar;


