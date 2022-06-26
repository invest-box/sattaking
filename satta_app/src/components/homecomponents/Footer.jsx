import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../styles/footer.css'
function Footer(props) {
    return (
        <div className='mainDivFooter'>
        <div className="footerFlex">
            <div className="footerHeading">
            <span >&copy;</span> sattabazar. All rights reserved
            </div>
            <div className="footerIcons">
            < FacebookIcon style={{color:'blue',marginRight:'5px',cursor:'pointer'}}/> 
            < InstagramIcon style={{color:'#E4405F',marginRight:'5px',cursor:'pointer'}}/> 
            < TwitterIcon style={{color:'#1DA1F2',cursor:'pointer'}}/> 

            </div>
        </div>
        </div>
    );
}

export default Footer;