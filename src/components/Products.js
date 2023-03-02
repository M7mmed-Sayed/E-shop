import styled from 'styled-components'
import { products } from '../data'
import Product from '../components/Product'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({ cat, filters, sort }) => {
   
    return (
        <Container>
            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
