import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const MobileMenu = ({ className, children, toggled, ...props }) => {
    const classNames = classnames('', className);

    const defaultStyle = {
        transition: 'all 300ms',
        opacity: 0,
    };

    const transitionStyles = {
        entering: {
            opacity: 1,
            transform: 'translateY(10px)',
            visibility: 'visible',
        },
        entered: {
            opacity: 1,
            transform: 'translateY(10px)',
            visibility: 'visible',
        },
        exiting: {
            opacity: 0,
            transform: 'translateY(0)',
            visibility: 'visible',
        },
        exited: {
            opacity: 0,
            transform: 'translateY(0)',
            visibility: 'hidden',
        },
    };

    return (
        <CSSTransition in={toggled} timeout={300}>
            {state => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                    className={classNames}
                    {...props}
                >
                    {children}
                </div>
            )}
        </CSSTransition>
    );
};

export default MobileMenu;
