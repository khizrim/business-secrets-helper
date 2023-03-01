import {Select, SelectOption, SelectOptionGroup, Text} from '@gravity-ui/uikit';
import React from 'react';

import styles from './Selector.module.css';

type SelectorProps = {
    label?: string;
    value?: string[];
    placeholder?: string;
    options: (SelectOption | SelectOptionGroup)[];
    onUpdate: (e: string[]) => void;
    multiple?: boolean;
};

export const Selector = ({
    label,
    value,
    placeholder,
    options,
    onUpdate,
    multiple,
}: SelectorProps) => {
    return (
        <div className={styles.selector}>
            <Text>{label}</Text>
            <Select
                value={value}
                placeholder={placeholder}
                options={options}
                onUpdate={onUpdate}
                multiple={multiple}
            />
        </div>
    );
};
