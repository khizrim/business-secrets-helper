import React from 'react';

import {TARGET_SITES} from '../../constants/targets';
import Selector from '../Selector';

export const TargetSelector = ({
    value,
    onUpdate,
}: {
    value: string[];
    onUpdate: (e: string[]) => void;
}) => {
    return (
        <Selector
            label="Choose target site:"
            value={value}
            placeholder="Target"
            options={TARGET_SITES}
            onUpdate={onUpdate}
        />
    );
};
