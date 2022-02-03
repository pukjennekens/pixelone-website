import classnames from 'classnames';

const Title = ({ children, className, ...props }) => {
    const classNames = classnames(`font-subtitle text-gray-400`, className);

    return (
        <p className={classNames} {...props}>
            {children}
        </p>
    );
};

export default Title;
