import { Button, Row, Col, Input } from 'antd'
import { loginUser } from 'api/api'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const Home = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
    })

    const navigate = useNavigate()
    // const {state} = useLocation()

    const { setLoggedInUser, setAuthToken } = useContext(UserContext)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }

    
    const handleLogin = async() => {
        if (user.email && user.password) {
            const response:any =  await loginUser(user.email, user.password)
            setAuthToken(response.token)
            setLoggedInUser(user.email)
            localStorage.setItem('loggedInUser', user.email)
            localStorage.setItem('auth-token',response.token)
            // navigate(state?.path || '/movies')
            navigate('movies')

            
        }
    }

    return (
        <div>
            <Row
                justify="center"
                align="top"
                style={{ minHeight: '100vh' }}
            >
                <Col span={8} style={{ margin: '50px' }}>
                    <form>
                        <div>
                            <label style={{ margin: '10px' }}>email</label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                            ></Input>
                        </div>
                        <div>
                            <label style={{ margin: '10px' }}> Password</label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                            ></Input>
                        </div>
                        <Row style={{ margin: '10px' }}>
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
