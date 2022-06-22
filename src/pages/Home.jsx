import { Button, Row, Col, Form, Checkbox, Input } from 'antd'
import ErrorList from 'antd/lib/form/ErrorList'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Home = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    let navigate = useNavigate()

    // const [registeredUsers, setRegisteredUsers] = useState({})

    const { setLoggedInUser } = useContext(UserContext)

    const handleInputChange = (event) => {
        event.persist()
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }
    // const handleSignup = () => {
    //     setRegisteredUsers({
    //         ...registeredUsers,
    //         [user.username]: user.password,
    //     })
    // }
    // console.log('ru', registeredUsers)

    const handleLogin = () => {
        localStorage.setItem('loggedInUser', user.username)
        setLoggedInUser(user.username)
        navigate('movies')
    }

    return (
        <div>
            <Row
                type="flex"
                justify="center"
                align="top"
                style={{ minHeight: '100vh' }}
            >
                <Col span={8} style={{ margin: '50px' }}>
                    <form>
                        <div>
                            <label style={{ margin: '10px' }}>
                                Enter Username
                            </label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                            ></Input>
                        </div>
                        <div>
                            <label style={{ margin: '10px' }}>
                                {' '}
                                Enter Password
                            </label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            ></Input>
                        </div>
                        <Row style={{ margin: '10px' }}>
                            {/* <Col span={4}>
                                <Button type="link" onClick={handleSignup}>
                                    Signup
                                </Button>
                            </Col> */}
                            {/* <Col span={4} offset={16}> */}
                            <Col span={4}>
                                <Button type="primary" onClick={handleLogin}>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default Home
