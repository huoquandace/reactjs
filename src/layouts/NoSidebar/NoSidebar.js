
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from './NoSidebar.module.scss';

function NoSidebar({ children }) {
    return (
        <div className={styles.containerFluid}>
            <Header />
            <div className={styles.main}>
                <div className={styles.content} >{children}</div>
            </div>
            <Footer />
        </div>
    );
}
export default NoSidebar;
