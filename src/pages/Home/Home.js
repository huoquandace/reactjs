
import Slideshow from "../../components/Slideshow";
import styles from './Home.module.scss'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className={styles.slider}><Slideshow delay='20000'/></div>
                <div className={styles.hotnews}>
                    <img src="https://dummyimage.com/1980x1080/999/fff&text=lorem" />
                    <img src="https://dummyimage.com/1980x1080/999/fff&text=ipsum" />
                </div>
            </div>
        </div>
    );
}

export default Home;
