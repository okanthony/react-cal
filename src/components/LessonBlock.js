import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/lessonBlock';

const LessonBlock = ({ lesson }) => {
    return (
        <div className={styles.lessonBlock}>
            {lesson.studentName}
        </div>
    );
};

export default LessonBlock;

LessonBlock.propTypes = {
    lesson: PropTypes.object.isRequired
};
