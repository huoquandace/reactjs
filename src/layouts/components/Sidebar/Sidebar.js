
import styles from './Sidebar.module.scss';


export default function Sidebar() {

    return (
        <div className={styles.sidebar} >
            <ul className={styles.menu}>
                <li>1***</li>
                <li>2***</li>
                <li>3***</li>
                <li>4***</li>
                <li>5***</li>
            </ul>
            <div className={styles.collapseBtn}>Close</div>
        </div>
    );
}
