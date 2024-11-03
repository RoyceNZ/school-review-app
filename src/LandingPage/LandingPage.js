import React from 'react';
import './LandingPage.module.css';
import TopNav from './TopNav/TopNav';
import Button from '@mui/material/Button';
import logo from '../Assets/logo.png';
import styles from './LandingPage.module.css';


const LandingPage = () => {
    return (
        <div className="landing-page container">
            <TopNav />
            <img src={logo} alt="logo" className={styles.logo} />
            <header className="landing-page-header">
                <h1>Welcome to School Review App</h1>
                <p>Your one-stop destination for school reviews</p>
                <Button variant='contained'>Get Started</Button>
            </header>
        </div>
    );
};

export default LandingPage;