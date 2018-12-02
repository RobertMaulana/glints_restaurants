import React from 'react'
import { Layout, Menu, DatePicker, Row, Col, Button } from 'antd'
import {DatePickerStyled} from './home.style'
import moment from 'moment'

const { Header, Content, Footer } = Layout

class Home extends React.Component {
    state = {
        date: ''
    }
    onChange = (date, dateString) => {
        this.setState({date: moment(dateString).format('ddd hh A')})
    }
    onSearch = () => {
        console.log(this.state.date)
    }
    render() {
        return (
            <DatePickerStyled>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">Profile</Menu.Item>
                            <Menu.Item key="2">Restaurant</Menu.Item>
                            <Menu.Item key="3">Signout</Menu.Item>
                        </Menu>
                    </Header>
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col span={12}>
                            <Content style={{ padding: '0 50px', marginTop: 80 }}>
                                <div 
                                    style={{ 
                                        background: '#fff', 
                                        padding: 24, 
                                        minHeight: 380
                                    }}
                                >
                                    <div style={{display: 'flex'}}>
                                        <DatePicker 
                                            className='date-filter' 
                                            onChange={this.onChange}
                                            format='ddd hh A'
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                        />
                                        <Button 
                                            type='primary' 
                                            className='btn-filter'
                                            onClick={this.onSearch}
                                        >Search</Button>
                                    </div>
                                </div>
                            </Content>
                        </Col>
                    </Row>
                    <Footer style={{ textAlign: 'center' }}>
                        Glints Restaurant ©2018
                    </Footer>
                </Layout>
            </DatePickerStyled>
        )
    }
}

export default Home