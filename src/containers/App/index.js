import React from 'react'
import { Layout } from 'antd'
import AppRouter from './AppRouter'

const { Content, Footer } = Layout

class App extends React.Component {
    render() {
        const { url } = this.props.match
        return (
            <Layout>
                {/* <Sidebar /> */}
                <Content>
                    <AppRouter url={url} {...this.props}/>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default App