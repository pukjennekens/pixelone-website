import classnames from 'classnames';

const Container = ({ children, className, ...props }) => {
    const classNames = classnames('container mx-auto px-6 lg:px-20', className);

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};

export default Container;
