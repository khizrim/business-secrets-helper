import {ArrowUpRightFromSquare, Xmark} from '@gravity-ui/icons';
import {Button, ClipboardButton, Icon, Link, List} from '@gravity-ui/uikit';
import React from 'react';

import styles from './GeneratedLinks.module.css';

export const GeneratedLinks = (props: {
    items: string[];
    onClick: () => void;
    onReset: () => void;
}) => {
    const renderLink = (link: string) => (
        <div className={styles.link}>
            <Link href={link} target={'_blank'}>
                {link}
            </Link>
            <ClipboardButton size={16} text={link} />
        </div>
    );

    return (
        <div className={styles.generatedLinks}>
            {Boolean(props.items.length) && (
                <>
                    <List items={props.items} renderItem={renderLink} />
                    <div className={styles.buttons}>
                        <Button size="xl" onClick={props.onClick}>
                            Open all urls
                            <Icon data={ArrowUpRightFromSquare} />
                        </Button>
                        <Button size="xl" onClick={props.onReset}>
                            <Icon data={Xmark} />
                        </Button>
                        <ClipboardButton size={18} text={props.items.join('\n')} />
                    </div>
                </>
            )}
        </div>
    );
};
