import React from 'react';

import {LANDINGS} from '../../constants/landings';
import Selector from '../Selector';

export const LinksSelector = ({
    value,
    onUpdate,
}: {
    value?: string[];
    onUpdate: (e: string[]) => void;
}) => {
    return (
        <Selector
            label="Use preselected links:"
            value={value}
            placeholder="List"
            options={LANDINGS}
            multiple={true}
            onUpdate={onUpdate}
        />
    );
};
