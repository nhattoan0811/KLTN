import Header from '~/Components/Header';
import ClassNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = ClassNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
