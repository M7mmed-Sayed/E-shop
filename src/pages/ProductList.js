import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { tablet } from '../responsive'
const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${tablet({
        margin: '7px 20px',
        display: 'flex',
        flexDirection: 'column',
    })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    ${tablet({
        margin: '5px 5px',
    })}
`
const Select = styled.select`
    padding: 8px;
    margin: 10px;
    ${tablet({
        margin: '5px 0px',
    })}
`
const Option = styled.option``
const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState([])
    const [sort, setSort] = useState('newest')
    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({ ...filters, [e.target.name]: value })
    }
    console.log(filters, sort)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products : </FilterText>
                    <Select
                        name="color"
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                [e.target.name]: e.target.value,
                            })
                        }
                    >
                        <Option disabled>Color</Option>
                        <Option>Black</Option>
                        <Option>red</Option>
                        <Option>Green</Option>
                        <Option>White</Option>
                    </Select>
                    <Select
                        name="size"
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                [e.target.name]: e.target.value,
                            })
                        }
                    >
                        <Option disabled>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>X</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value={'asc'}>Price (Asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList
