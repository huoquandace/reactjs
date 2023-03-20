
import { useEffect, useState } from 'react'

import styles from './ProductList.module.scss'

import * as productService from '../../services/getProductsService'
import ProductItem from './ProductItem'

export default function ProductList() {

	const [products, setProducts] = useState([])

	useEffect(() => {
		productService.getProducts()
		.then(data => setProducts(data))
		.catch(error => console.log(error))
	}, [])

	return (
		<div className={styles.productList}>
			{products.map((product, index) => <ProductItem product={product} key={index} />)}
		</div>
	)
}