import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    products: {},
    filteredProducts: [],
    appliedFilters: [],
    currentPage: 1,
    maxPageNumberLimit: 4,
    minPageNumberLimit: 0
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        receivedProducts(state, action) {
            const products = action.payload
            products.forEach(product => {
                state.products[product.id] = product
            })
            state.filteredProducts = state.products
        },
        filterByValue(state, action) {
            let value = action.payload.value

            if (!state.appliedFilters) {
                state.appliedFilters = []
            }

            let appliedFilters = state.appliedFilters

            if (value) {
                let index = state.appliedFilters.indexOf('filterByValue')
                if(index === -1) {
                    state.appliedFilters.push('filterByValue')
                }
                state.filteredProducts = Object.values(state.products).filter(product => product.title.toLowerCase().includes(value))
            } else {
                let index = state.appliedFilters.indexOf('filterByValue')
                state.appliedFilters.splice(index, 1)
                if (appliedFilters.length === 0) {
                    state.filteredProducts = state.products
                }
            }
        },
        loadData(state, action) {
            let count = action.payload.count
            let countPerPage = action.payload?.counterPerPage || 3
            let totalPage = Math.ceil(count / countPerPage)
            state.countPerPage = countPerPage
            state.totalPage = totalPage
            state.currentCount = countPerPage
            state.filteredPages = totalPage
            state.pageNumberLimit = 1
            state.filteredProducts = Object.values(state.products).slice(state.currentPage * countPerPage - countPerPage, state.currentPage * countPerPage)
        },
        loadNewPage(state, action) {
            let addPage = action.payload.page
            state.currentPage += addPage
            let perPage = state.countPerPage
            let nextProducts
            if (addPage === 1) {
                let upperCount = state.currentCount + perPage
                let lowerCount = state.currentCount

                state.currentCount += state.countPerPage
                state.maxPageNumberLimit += state.pageNumberLimit
                state.minPageNumberLimit += state.pageNumberLimit
                nextProducts = Object.values(state.products).slice(lowerCount, upperCount)
            }
            if (addPage === -1) {
                let upperCount = state.currentCount
                let lowerCount = state.currentCount - perPage

                state.currentCount -= state.countPerPage
                state.maxPageNumberLimit -= state.pageNumberLimit
                state.minPageNumberLimit -= state.pageNumberLimit
                nextProducts = Object.values(state.products).slice(lowerCount - perPage, upperCount - perPage)
            }
            state.filteredProducts = nextProducts
        },
        loadExactPage(state, action) {
            const exactPage = action.payload.page
            let upperCountExact = state.countPerPage * exactPage
            let lowerCountExact = upperCountExact - state.countPerPage

            state.filteredProducts = Object.values(state.products).slice(lowerCountExact, upperCountExact)
            state.currentCount = upperCountExact
            state.currentPage = exactPage
        },
        // loadMoreProducts(state, action) {
        //     console.log(action.payload.count)
        //     state.countPerPage += action.payload.count
        // }
    }
})

export const goods = state => state.products.products
export const goodsFiltered = state => state.products.filteredProducts
export const countPerPage = state => state.products.countPerPage
export const maxPageNumberLimit = state => state.products.maxPageNumberLimit
export const { receivedProducts, filterByValue, loadNewPage, loadData, loadExactPage, loadMoreProducts } = productsSlice.actions
export default productsSlice.reducer

