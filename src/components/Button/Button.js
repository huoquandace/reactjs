
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';


function Button({ to, href, primary, secondary, disabled, children, className, onClick, ...passProps }) {
    const props = {
        onClick,
        ...passProps
    }
    let Component = 'button';

    if (to) {
        props.to = to;
        Component = Link
    } else if (href) {
        props.href = href;
        Component = 'a'
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Component className={`
            ${styles.wrapper} 
            ${primary ? styles.primary : ''}
            ${secondary ? styles.secondary : ''}
            ${disabled ? styles.disabled : ''}
            ${className ? className : ''}
        `} {...props}>
             <span>{children}</span>
        </Component>
    );
}

export default Button;
