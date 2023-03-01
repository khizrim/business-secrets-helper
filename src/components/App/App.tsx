import {ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import Header from '../Header';
import LinkGenerator from '../LinkGenerator';

import styles from './App.module.css';

export const App = () => {
    return (
        <ThemeProvider>
            <div className={styles.app}>
                <div className={styles.container}>
                    <Header />
                    <LinkGenerator />
                </div>
            </div>
        </ThemeProvider>
    );
};
