import classnames from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ level, className, children, ...props }) => {
    const CustomTag = `${level}`;
    const classNames = classnames(
        `font-title text-blue-900 leading-tight`,
        className
    );

    return (
        <CustomTag className={classNames} {...props}>
            {children}
        </CustomTag>
    );
};

Title.propTypes = {
    level: PropTypes.oneOf({
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
    }),
};

export default Title;
