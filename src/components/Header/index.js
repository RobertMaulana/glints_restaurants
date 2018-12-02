import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const HeaderComp = () => {
    return (
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
    )
}

export default HeaderComp