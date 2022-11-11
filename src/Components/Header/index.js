import styles from './Header.module.scss';
import ClassNames from 'classnames/bind';
import Img from '../Img';
import image from '~/assets/Images';

const cx = ClassNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className="logo">
                <Img src={image.logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;
