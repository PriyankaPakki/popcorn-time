import { Input, Button } from 'antd'
import React, {useState} from 'react'


type SearchboxProps = {
   searchValue: string
   setSearchValue: (searchText : string | null | undefined) => void,
   handleSearchInputChange: (event: any) => void
}


function Searchbox({ searchValue, setSearchValue, handleSearchInputChange }: SearchboxProps) {
    const [searchText, setSearchText] = useState('') 

    const handleGoClick = () => {
        setSearchValue(searchText)
    }
    return (
        <div>
            <Input
                placeholder="Enter Movie or Series Title"
                onChange={(e : any) => setSearchText(e.target.value)}
                name="searchbox"
                style={{ width: 200 }}
            ></Input>
            <Button type="default" onClick={handleGoClick}>
                Go
            </Button>
        </div>
    )
}

export default Searchbox
