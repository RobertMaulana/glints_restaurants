import React from 'react'
import {connect} from 'react-redux'
import { Layout, Row, Col, Spin, Avatar, Tabs, Modal, Button } from 'antd'
import {ProfileContainer, CollectionInput} from './profile.style'
import authActions from '../../redux/auth/actions'
import collectionActions from '../../redux/collections/actions'
import Card from '../../components/Card'

const { Content } = Layout
const TabPane = Tabs.TabPane

const {getUserDetails} = authActions
const {getCollectionsByUserId, inviteCollaborateCollections} = collectionActions

class Profile extends React.Component {
    state = {
        users: {},
        loading: true,
        loadingGetCollection: false,
        collections: [],
        collaborateInvite: false,
        collectionName: '',
        email: '',
        collectionId: '',
        userId: ''
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
    handleOk = e => {
        // const {idRestaurant, restaurantName, users, saveCollectionsMessage} = this.state
        // if (restaurantName === '') {
        //     alert('Collection name is mandatory')
        //     return
        // }
        // if (saveCollectionsMessage !== '') {
        //     this.setState({
        //         collectionPopup: false,
        //         saveCollectionsMessage: ''
        //     })
        //     this.props.resetRedux()
        //     return
        // }
        // this.props.saveCollections({
        //     restaurant_id: idRestaurant,
        //     name: restaurantName,
        //     user_id: users.id
        // })
    }
    
    handleCancel = e => {
        // this.setState({collectionPopup: false})
    }
    onSubmit = e => {
        e.preventDefault()
        const {email, collectionId, userId} = this.state
        this.props.inviteCollaborateCollections({
            email_to: email, 
            collection_id: collectionId, 
            user_id: userId
        })
    }
    invitationCollaborate = (name, colId, userId) => {
        this.setState({
            collaborateInvite: true,
            collectionName: name,
            collectionId: colId,
            userId
        })
    }
    onChangeEmail = event => {
        this.setState({email: event.target.value})
    }
    render() {
        const {loading, users, collections, collaborateInvite, collectionName} = this.state
        return (
            <ProfileContainer>
                <Layout>
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Modal
                            title={`Invite to collaborate ${collectionName}`}
                            visible={collaborateInvite}
                            closable={false}
                            footer={[
                                <Button key={1} onClick={this.handleCancel}>Cancel</Button>,
                                <Button 
                                    key={2} 
                                    type="submit" 
                                    htmlType='submit'
                                    form="myForm"
                                >
                                    Ok
                                </Button>
                            ]}
                            maskClosable={false}
                        >
                            <form onSubmit={this.onSubmit} id='myForm'>
                                <CollectionInput 
                                    type='email' 
                                    value={this.state.email} 
                                    onChange={this.onChangeEmail} 
                                    placeholder='your friend email'
                                    required
                                />
                            </form>
                        </Modal>
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
                                                        invitationCollaborate={this.invitationCollaborate}
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
    {getUserDetails, getCollectionsByUserId, inviteCollaborateCollections}
)(Profile)
