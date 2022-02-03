import PropTypes from 'prop-types';

const Title = ({ level, ...props }) => {
    const CustomTag = `${level}`;

    return <CustomTag {...props}>{props.children}</CustomTag>;
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
