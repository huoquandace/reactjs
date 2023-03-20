

import styles from './ProductItem.module.scss'
import Button from '../Button'

export default function ProductItem( {product} ) {

    return (
        <div className={styles.card}>
            <img src="https://dummyimage.com/200x200/999/fff&text=lorem" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"> {product.name} </h5>
                <p className="card-text">Some quick example text</p>
                <Button>Add</Button>
            </div>
        </div>
    )
}