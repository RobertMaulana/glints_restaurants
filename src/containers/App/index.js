import React from 'react'
import { Layout } from 'antd'
import AppRouter from './AppRouter'
import Header from '../../components/Header'

const { Content, Footer } = Layout

class App extends React.Component {
    render() {
        const { url } = this.props.match
        return (
            <Layout>
                <Header {...this.props}/>
                <Content>
                    <AppRouter url={url} {...this.props}/>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default App