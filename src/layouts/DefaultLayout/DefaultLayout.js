
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={styles.containerFluid}>
            <Header />
            <div className={styles.main}>
                <Sidebar />
                <div className={styles.content} >{children}</div>
            </div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
