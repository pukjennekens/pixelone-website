import classnames from 'classnames';
import Link from 'next/link';

const LinkButton = ({ children, className, ...props }) => {
    const classNames = classnames(
        'py-4 px-6 bg-blue-900 text-white rounded-md inline-block focus:outline focus:outline-offset-2 focus:outline-blue-900 focus:outline-2 hover:shadow-lg transition-all',
        className
    );

    return (
        <Link {...props}>
            <a className={classNames}>{children}</a>
        </Link>
    );
};

export default LinkButton;
