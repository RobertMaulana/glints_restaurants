import React from 'react'
import { Layout } from 'antd'

const { Content, Footer } = Layout

class App extends React.Component {
    render() {
        return (
            <Layout>
                {/* <Sidebar /> */}
                <Content>
                    <AppRouter {...this.props}/>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default App