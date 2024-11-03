import React from 'react';
import styles from './TopNav.module.css';
import Button from '@mui/material/Button';

const TopNav = () => {
    return (
        <div>
            <nav className={styles['top-nav']}>
                <div className={styles['tap-nav-items']}>
                    <Button className="btn">Write a review</Button>
                    <Button className="btn">Contact</Button>
                </div>

                <div className={styles['tap-nav-login']}>
                    <Button className="btn">Login</Button>
                    <span>/</span>
                    <Button className="btn">Sign Up</Button>
                </div>

            </nav>
        </div>
    );
};

export default TopNav;