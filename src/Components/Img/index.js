import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './img.module.scss';

const Img = forwardRef(({ src, className, alt, ...props }, ref) => {
    // const [fallback, setFallback] = useState('');
    // const handleFallback = () => {
    //     setFallback(customFallback);
    // };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
            // onError={handleFallback}
        />
    );
});

export default Img;
