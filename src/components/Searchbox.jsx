import { Input, Button } from 'antd'
import React from 'react'

function Searchbox({ searchValue, setSearchValue, handleSearchInputChange }) {
    return (
        <div>
            <Input
                placeholder="Enter Movie or Series Title"
                onChange={handleSearchInputChange}
                name="searchbox"
                style={{ width: 200 }}
                value={searchValue}
            ></Input>
            <Button type="default" onClick={setSearchValue}>
                Go
            </Button>
        </div>
    )
}

export default Searchbox
