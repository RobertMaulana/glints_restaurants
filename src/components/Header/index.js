import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

class HeaderComp extends React.Component {
    state = {
        menu: ''
    }
    goToProfilePage = () => {
        const {history} = this.props
        history.push('/profile')
    }
    goToHomePage = () => {
        const {history} = this.props
        history.push('/')
    }
    render() {
        const {menu} = this.state
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1" onClick={this.goToProfilePage}>Profile</Menu.Item>
                    <Menu.Item key="2" onClick={this.goToHomePage}>Restaurant</Menu.Item>
                    <Menu.Item key="3">Signout</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default HeaderComp