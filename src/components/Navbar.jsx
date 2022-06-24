import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Searchbox from './Searchbox'
import { Header } from 'antd/lib/layout/layout'
import { Menu } from 'antd'

const Navbar = ({ searchValue, setSearchValue }) => {
    const { loggedInUser } = useContext(UserContext)
    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="searchbox">
                        <Searchbox
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                    </Menu.Item>
                    <Menu.Item key="user">
                        {' '}
                        <h2 style={{ color: 'white' }}>Hi {loggedInUser}</h2>
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}
export default Navbar
