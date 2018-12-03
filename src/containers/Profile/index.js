import React from 'react'
import {connect} from 'react-redux'
import { Layout, Row, Col, Spin, Avatar, Tabs, Modal, Button, Alert } from 'antd'
import {ProfileContainer, CollectionInput} from './profile.style'
import authActions from '../../redux/auth/actions'
import collectionActions from '../../redux/collections/actions'
import Card from '../../components/Card'

const { Content } = Layout
const TabPane = Tabs.TabPane

const {getUserDetails} = authActions
const {
    getCollectionsByUserId, 
    inviteCollaborateCollections, 
    resetReduxCollections,
    editCollections
} = collectionActions

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
        userId: '',
        getInviteMessage: '',
        editCollectionPopup: false,
        collectionIdEdit: '',
        collectionNameEdit: ''
    }
    componentWillReceiveProps(nextProps) {
        const {users, getUserDetailsMessage} = nextProps.Auth
        const {collections, getCollectionsMessage, getInviteMessage} = nextProps.Collections
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
        if (getInviteMessage !== '') {
            this.setState({getInviteMessage})
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
    handleCancel = e => {
        this.setState({
            collaborateInvite: false,
            editCollectionPopup: false
        })
    }
    onSubmit = e => {
        e.preventDefault()
        const {email, collectionId, userId, getInviteMessage} = this.state
        if (getInviteMessage !== '') {
            this.setState({
                collaborateInvite: false,
                getInviteMessage: '',
                email: ''
            })
            this.props.resetReduxCollections()
            return
        }
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
    handleCloseAlert = () => {
        this.setState({ getInviteMessage: '' })
        this.props.resetReduxCollections()
    }
    editCollections = (id, name) => {
        this.setState({
            collectionNameEdit: name,
            collectionIdEdit: id,
            editCollectionPopup: true
        })
    }
    onChangeCollectionName = event => {
        this.setState({collectionNameEdit: event.target.value})
    }
    onSubmitEdit = e => {
        e.preventDefault()
        const {collectionIdEdit, collectionNameEdit} = this.state
        // if (getInviteMessage !== '') {
        //     this.setState({
        //         collaborateInvite: false,
        //         getInviteMessage: '',
        //         email: ''
        //     })
        //     this.props.resetReduxCollections()
        //     return
        // }
        this.props.editCollections({
            collection_id: collectionIdEdit, 
            collection_name: collectionNameEdit
        })
    }
    render() {
        const {
            loading, 
            users, 
            collections, 
            collaborateInvite, 
            collectionName,
            getInviteMessage,
            editCollectionPopup,
            collectionNameEdit
        } = this.state
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
                            {
                                (getInviteMessage !== '' && getInviteMessage === 'success') && (
                                    <Alert
                                        message="Invitation sent"
                                        type="success"
                                        closable
                                        afterClose={this.handleCloseAlert}
                                    />
                                )
                            }
                            {
                                (getInviteMessage !== '' && getInviteMessage !== 'success') && (
                                    <Alert
                                        message="Invitation is failed to send"
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseAlert}
                                    />
                                )
                            }
                            <form onSubmit={this.onSubmit} id='myForm'>
                                {
                                    getInviteMessage === '' && (
                                        <CollectionInput 
                                            type='email' 
                                            value={this.state.email} 
                                            onChange={this.onChangeEmail} 
                                            placeholder='your friend email'
                                            required
                                        />
                                    )
                                }
                            </form>
                        </Modal>
                        <Modal
                            title={`Edit collection for ${collectionNameEdit}`}
                            visible={editCollectionPopup}
                            closable={false}
                            footer={[
                                <Button key={1} onClick={this.handleCancel}>Cancel</Button>,
                                <Button 
                                    key={2} 
                                    type="submit" 
                                    htmlType='submit'
                                    form="myFormEdit"
                                >
                                    Ok
                                </Button>
                            ]}
                            maskClosable={false}
                        >
                            <form onSubmit={this.onSubmitEdit} id='myFormEdit'>
                                <CollectionInput 
                                    value={collectionNameEdit} 
                                    onChange={this.onChangeCollectionName} 
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
                                                        editCollections={this.editCollections}
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
    {
        getUserDetails, 
        getCollectionsByUserId, 
        inviteCollaborateCollections, 
        resetReduxCollections, 
        editCollections
    }
)(Profile)
