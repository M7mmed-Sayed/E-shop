import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { tablet } from '../responsive'
import CategoryItem from './CategoryItem'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${tablet({
        flexDirection: 'column',
        padding: '0px',
        margin: '15px 0px',
    })}
`
const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
