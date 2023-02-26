import {ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import styles from './App.module.css';

export const App = () => {
    return (
        <ThemeProvider>
            <div className={styles.app}>
                <div className={styles.container}>
                    <h1>Business Secrets Helper App</h1>
                </div>
            </div>
        </ThemeProvider>
    );
};
