import React from 'react';
import styles from './header.module.css';

export default function({ title }) {
    return <div className={ styles.root }>
        { title }
    </div>
}