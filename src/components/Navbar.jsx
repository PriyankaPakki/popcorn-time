import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Searchbox from './Searchbox'
import { Header } from 'antd/lib/layout/layout'
import { Menu, DatePicker, Radio } from 'antd'

const Navbar = ({
    searchValue,
    setSearchValue,
    year,
    setYear,
    type,
    setType,
}) => {
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
                    <Menu.Item key="yearbox">
                        <DatePicker
                            onChange={setYear}
                            picker="year"
                            disabledDate={(d) => !d || d.isAfter('2022-12-31')}
                            allowClear={true}
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
                </Menu>
            </Header>
        </div>
    )
}
export default Navbar
