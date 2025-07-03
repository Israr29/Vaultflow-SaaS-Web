import { motion } from 'framer-motion';
import './Footer.css'
import logo from "/projects/my-app/src/assets/Navbar-logo.png"

function Footer() {
return (
    <motion.footer
    initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
    
    className="footer">
        <div className="footer-container">
            <div className="footer-box">
                <h4>Contact </h4>
                <p>Work inquires:work@vaultflow.com</p>
                <p>PR and speaking:press@vaultflow.com</p>
                <p>New business:newbusiness@vaultflow.com</p>
                <h4 className='careers'>Careers</h4>
                <p>Careers@vaultflow.com</p>
                
                
            </div>
            <div className="footer-box">
                <h4 >Address</h4>
               <p className='address'>398 11th Street, Floor 2
San Francisco, CA 94103</p>
                <h4 className='socail'>Social</h4>
                <ul className='social-links'>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Tik Tok</a></li>
                    
                </ul>
            </div>
        </div>
        <div className="terms">
            <p className='terms-text'>© 2023 Vaultflow. All rights reserved.</p>
            <ul className='terms-links'>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
                
            </ul>
            <div className="image-container">
                <img src={logo} alt="Vaultflow Logo" loading='lazy' />
            </div>
        </div>
    </motion.footer>
);
}


export default Footer;