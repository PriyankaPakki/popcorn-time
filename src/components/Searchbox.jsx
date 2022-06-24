import { Input } from 'antd'
import React from 'react'

function Searchbox({ searchValue, setSearchValue }) {
    return (
        <div>
            <Input
                placeholder="Enter Movie or Series Title"
                onChange={setSearchValue}
                name="searchbox"
            ></Input>
        </div>
    )
}

export default Searchbox
