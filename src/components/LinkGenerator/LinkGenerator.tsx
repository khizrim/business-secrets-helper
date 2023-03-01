import React, {useState} from 'react';

import {openAllUrls} from '../../utils/openAllUrls';
import {trimUrl} from '../../utils/trimUrl';
import Form from '../Form';
import GeneratedLinks from '../GeneratedLinks';

import styles from './LinkGenerator.module.css';

export const LinkGenerator = () => {
    const [textInputValue, setTextInputValue] = useState<string>('');
    const [links, setLinks] = useState<string[]>([]);
    const [value, setValue] = React.useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (value) {
            const trimmedLinks = trimUrl(textInputValue)
                .split('\n')
                .map((link) => {
                    return value + link;
                });

            setLinks(trimmedLinks);
        } else {
            setLinks(textInputValue.split('\n'));
        }
    };

    const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextInputValue(e.target.value);
    };

    const handleTrim = (): void => {
        setTextInputValue(trimUrl(textInputValue));
    };

    return (
        <div className={styles.linkGenerator}>
            <Form
                onSubmit={handleSubmit}
                onTargetSelect={(e: string[]) => {
                    setValue(e);
                }}
                target={value}
                onLinksSelect={(e: string[]) => setTextInputValue(e.join(''))}
                links={textInputValue}
                onChange={handleTextInputChange}
                onClick={handleTrim}
            />
            <GeneratedLinks
                items={links}
                onClick={() => openAllUrls(links)}
                onReset={() => setLinks([])}
            />
        </div>
    );
};
