'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import styles from './page.module.scss';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.page}>
            {/* Background */}
            <div className={styles.background} />

            {/* Home Screen */}
            <motion.div
                className={styles.homescreen}
                variants={{
                    open: {
                        y: '-100%',
                    },
                    closed: {
                        y: 0,
                    },
                }}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                transition={{ ease: 'linear', duration: 0.25 }}
            >
                {/* Status bar */}
                <div className={styles.statusbar}>
                    <div className={styles.network}>Verizon</div>
                    <div className={styles.icons}>
                        <div>Arrow</div>
                        <div>Signal</div>
                        <div>Wi-Fi</div>
                        <div>Battery %</div>
                        <div>Battery Visual</div>
                    </div>
                </div>
                <div className={styles.view}>
                    <div className={styles.widgets}>Widgets</div>
                    <div className={styles.main}>
                        <div className={styles.date}>Sun Sep 7</div>
                        <div className={styles.time}>11:59</div>
                    </div>
                    <div className={styles.bar} onClick={() => setIsOpen(true)} />
                </div>
            </motion.div>

            {/* Overlay */}
            {/* NOTE: OFF */}
            {/* <motion.div
                className={styles.overlay}
                initial={{
                    opacity: 1,
                }}
                animate={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            /> */}
        </div>
    );
}
