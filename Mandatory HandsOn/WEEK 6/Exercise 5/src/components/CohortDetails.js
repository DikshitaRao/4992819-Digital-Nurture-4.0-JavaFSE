// src/components/CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
    const headingStyle = {
        color: cohort.status === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={headingStyle}>{cohort.name}</h3>
            <dl>
                <dt>Mentor</dt>
                <dd>{cohort.mentor}</dd>
                <dt>Status</dt>
                <dd>{cohort.status}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
