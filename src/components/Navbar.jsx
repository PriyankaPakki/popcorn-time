import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Searchbox from './Searchbox'
import { Header } from 'antd/lib/layout/layout'
import { Menu, DatePicker, Radio, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Navbar = ({
    searchValue,
    setSearchValue,
    handleSearchInputChange,
    year,
    setYear,
    type,
    setType,
}) => {
    const navigate = useNavigate()

    const { loggedInUser } = useContext(UserContext)

    function handleLogout() {
        localStorage.removeItem('loggedInUser')
        navigate('/')
    }

    return (
        <div>
            <nav>
                <div className="" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ padding: 20, height: 'auto' }}
                >
                    <Menu.Item key="icon">
                        <img
                            style={{ width: 50, height: 50 }}
                            src="../popcorn.png"
                            alt="logo"
                        ></img>
                    </Menu.Item>
                    <Menu.Item key="appname">
                        <h1 style={{ color: 'white' }}>Popcorn Time</h1>
                    </Menu.Item>

                    <Menu.Item key="searchbox">
                        <Searchbox
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            handleSearchInputChange={handleSearchInputChange}
                        />
                    </Menu.Item>
                    <Menu.Item key="yearbox">
                        <DatePicker
                            onChange={setYear}
                            picker="year"
                            disabledDate={(d) => !d || d.isAfter('2022-12-31')}
                            allowClear={true}
                            // value={new Date(year)}
                        />
                    </Menu.Item>
                    <Menu.Item key="type">
                        <Radio.Group onChange={setType} value={type}>
                            <Radio value={''} style={{ color: '#ffffff' }}>
                                All
                            </Radio>
                            <Radio value={'movie'} style={{ color: '#ffffff' }}>
                                Movies
                            </Radio>
                            <Radio
                                value={'series'}
                                style={{ color: '#ffffff' }}
                            >
                                Series
                            </Radio>
                        </Radio.Group>
                    </Menu.Item>

                    <Menu.Item key="user">
                        {' '}
                        <h2 style={{ color: 'white' }}>Hi {loggedInUser}</h2>
                    </Menu.Item>
                    <Menu.Item key="logout">
                        <Button type="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Menu.Item>
                </Menu>
            </nav>
        </div>
    )
}
export default Navbar
