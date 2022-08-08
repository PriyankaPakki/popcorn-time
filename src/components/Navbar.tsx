import React, { useContext } from 'react'
import Searchbox from './Searchbox'
import { Menu, DatePicker, Radio, Button, RadioChangeEvent } from 'antd'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import * as moment from 'moment';


type NavbarProps = {
    searchValue: string,
    handleSearchClick: (searchText : string | null | undefined) => void,
    handleYearChange: (value: null, dateString: string) => void
    type: string,
    setType: (e: RadioChangeEvent) => void
}

const Navbar = ({
    searchValue,
    handleSearchClick,
    handleYearChange,
    type,
    setType,
}: NavbarProps) => {
    const navigate = useNavigate()

    const { loggedInUser } = useContext(UserContext)

    function handleLogout() {
        localStorage.removeItem('loggedInUser')
        localStorage.removeItem('auth-token')
        navigate('/')
    }

    const handleGo = (value : string | null | undefined) => {handleSearchClick(value)}

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
                            setSearchValue={handleGo}
                        />
                    </Menu.Item>
                    <Menu.Item key="yearbox">
                        <DatePicker
                            onChange={(value: moment.Moment | null, dateString: string) => {handleYearChange(null,dateString)}}
                            picker="year"
                            disabledDate={(d) => !d || d.isAfter('2022-12-31')}
                            allowClear={true}
                        />
                    </Menu.Item>
                    <Menu.Item key="type">
                        <Radio.Group onChange={(e) => {setType(e)}} value={type}>
                            <Radio value={'all'} style={{ color: '#ffffff' }}>
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
