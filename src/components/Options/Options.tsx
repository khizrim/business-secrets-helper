import React from 'react';

import LinksSelector from '../LinksSelector';
import TargetSelector from '../TargetSelector';

import styles from './Options.module.css';

export const Options = (props: {
    onUpdate: (e: string[]) => void;
    value: string[];
    onUpdate1: (e: string[]) => void;
}) => (
    <div className={styles.options}>
        <TargetSelector onUpdate={props.onUpdate} value={props.value} />
        <LinksSelector onUpdate={props.onUpdate1} />
    </div>
);
