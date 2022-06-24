import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Searchbox from './Searchbox'
import { Header } from 'antd/lib/layout/layout'
import { Menu, DatePicker } from 'antd'

const Navbar = ({ searchValue, setSearchValue, year, setYear }) => {
    const { loggedInUser } = useContext(UserContext)
    const maxYear = 2022

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
                    <Menu.Item key="yearbox">
                        <DatePicker
                            onChange={setYear}
                            picker="year"
                            disabledDate={(d) => !d || d.isAfter('2022-06-25')}
                            allowClear={true}
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
