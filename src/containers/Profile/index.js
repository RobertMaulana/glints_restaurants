import React from 'react'
import {connect} from 'react-redux'
import { Layout, Row, Col, Spin, Avatar, Tabs } from 'antd'
import {ProfileContainer} from './profile.style'
import authActions from '../../redux/auth/actions'
import collectionActions from '../../redux/collections/actions'
import Card from '../../components/Card'

const { Content } = Layout
const TabPane = Tabs.TabPane

const {getUserDetails} = authActions
const {getCollectionsByUserId} = collectionActions

class Profile extends React.Component {
    state = {
        users: {},
        loading: true,
        loadingGetCollection: false,
        collections: []
    }
    componentWillReceiveProps(nextProps) {
        const {users, getUserDetailsMessage} = nextProps.Auth
        const {collections, getCollectionsMessage} = nextProps.Collections
        if (getUserDetailsMessage !== '') {
            this.setState({
                users,
                loading: false
            })
        }
        if (getCollectionsMessage !== '') {
            this.setState({
                collections,
                loadingGetCollection: false
            })
        }
    }
    componentDidMount() {
        this.setState({loadingGetCollection: true})
        setTimeout(() => {
            this.fetchCollections()
        }, 2000)
        this.props.getUserDetails()
    }
    fetchCollections = () => {
        const {users} = this.state
        this.props.getCollectionsByUserId(users.id)
    }
    render() {
        const {loading, users, collections} = this.state
        return (
            <ProfileContainer>
                <Layout>
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col span={12}>
                            <Spin spinning={loading}>
                                <Content className='content-container'>
                                    <div className='profile-bound'>
                                        <Avatar size={64} icon="user" />
                                        <p>{users.fullname}</p>
                                    </div>
                                    <div>
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Collections" key="1">
                                                <Spin spinning={this.state.loadingGetCollection}>
                                                    <Card 
                                                        collections={collections}
                                                        users={users}
                                                    />
                                                </Spin>
                                            </TabPane>
                                        </Tabs>
                                    </div>
                                </Content>
                            </Spin>
                        </Col>
                    </Row>
                </Layout>
            </ProfileContainer>
        )
    }
}

export default connect(
    state => ({
        Auth: state.Auth,
        Collections: state.Collections
    }),
    {getUserDetails, getCollectionsByUserId}
)(Profile)
