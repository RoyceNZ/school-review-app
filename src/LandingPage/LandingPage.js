import React from 'react';
import './LandingPage.module.css';
import TopNav from './TopNav/TopNav';
import logo from '../Assets/logo.png';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';

const LandingPage = () => {
    return (
        <div className="container">
            <TopNav />
            <img src={logo} alt="logo" className={styles.logo} />
            <SearchBar />
        </div>
    );
};

export default LandingPage;