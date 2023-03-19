
import styles from './Header.module.scss';

import images from '../../../assets/images'
import Button from '../../../components/Button';

export default function Header() {

    return (
        <header>
            <div className={styles.logo}>
                <img src={images.logoDark} />
                <div className={styles.slogen}> TGDD</div>
            </div>

            <div className={styles.search}>
                <form>
                    <input type="text" name="q" placeholder='Search' />
                    <div className={styles.divide}></div>
                    <button type="submit" className={styles.submitBtn} ><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            <div className={styles.actions}>
                <Button primary>Login</Button>
                <Button className="custom" secondary >Register</Button>
            </div>
        </header>
    );
}
