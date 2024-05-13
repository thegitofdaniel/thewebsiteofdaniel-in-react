import React from 'react';
import PropTypes from 'prop-types';

function ProgressItem({ name, percentage }) {
    const styles = {
        progressArea: {
            alignItems: 'center',
            display: 'flex',
            gap: '1rem',
            width: '100%'
        },
        progressBar: {
            background: 'var(--color-primary-light)',
            height: '1rem',
            width: '100%'
        },
        progress: {
            background: 'var(--color-primary)',
            height: '100%',
            width: `${percentage}%`,
            transition: 'width 0.5s ease'
        }
    };

    return (
        <div className="item">
            <h5>{name}</h5>
            <div style={styles.progressBar}>
                <div style={styles.progress}></div>
            </div>
        </div>
    );
}

ProgressItem.propTypes = {
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

function ProgressList({ items }) {
    return (
        <div className="progress-list">
            {items.map((item, index) => (
                <ProgressItem key={index} name={item[0]} percentage={item[1]} />
            ))}
        </div>
    );
}

ProgressList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ).isRequired
};

export default ProgressList;
