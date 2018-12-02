import React from 'react'
import {connect} from 'react-redux'
import { Layout, DatePicker, Row, Col, Button, Spin, Modal, Alert } from 'antd'
import {DatePickerStyled, CollectionInput} from './home.style'
import moment from 'moment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import restaurantActions from '../../redux/restaurants/actions'
import authActions from '../../redux/auth/actions'

const { Content } = Layout
const {
    getRestaurants, 
    searchRestaurants, 
    saveCollections,
    resetRedux
} = restaurantActions

const {getUserDetails} = authActions

class Home extends React.Component {
    state = {
        date: '',
        loading: true,
        restaurants: [],
        collectionPopup: false,
        idRestaurant: '',
        restaurantName: '',
        users: {},
        saveCollectionsMessage: ''
    }
    componentWillReceiveProps(nextProps) {
        const {getRestaurantMessage, restaurants, saveCollectionsMessage} = nextProps.Restaurants
        const {users, getUserDetailsMessage} = nextProps.Auth
        if (getRestaurantMessage !== '') {
            this.setState({
                restaurants,
                loading: false
            })
        }
        if (getUserDetailsMessage !== '') {
            this.setState({
                users,
                loading: false
            })
        }
        if (saveCollectionsMessage !== '') {
            this.setState({saveCollectionsMessage})
        }
    }
    componentDidMount() {
        this.props.getRestaurants()
        this.props.getUserDetails()
    }
    onChange = (date, dateString) => {
        this.setState({date: dateString})
    }
    onSearch = () => {
        if (this.state.date === '') {
            alert('date time is mandatory')
            return
        }
        this.setState({loading: true})
        setTimeout(() => {
            this.props.searchRestaurants(this.state.date)
        }, 2000)
    }
    onClickCollection = (id, name, status) => {
        this.setState({
            idRestaurant: id,
            restaurantName: name,
            collectionPopup: status
        })
    }
    handleOk = e => {
        const {idRestaurant, restaurantName, users, saveCollectionsMessage} = this.state
        if (restaurantName === '') {
            alert('Collection name is mandatory')
            return
        }
        if (saveCollectionsMessage !== '') {
            this.setState({
                collectionPopup: false,
                saveCollectionsMessage: ''
            })
            this.props.resetRedux()
            return
        }
        this.props.saveCollections({
            restaurant_id: idRestaurant,
            name: restaurantName,
            user_id: users.id
        })
    }
    
    handleCancel = e => {
        this.setState({collectionPopup: false})
    }
    onChangeCollectionName = event => {
        this.setState({restaurantName: event.target.value})
    }
    handleCloseAlert = () => {
        this.setState({ saveCollectionsMessage: '' })
        this.props.resetRedux()
    }
    render() {
        const {
            loading, 
            restaurants, 
            collectionPopup,
            restaurantName,
            saveCollectionsMessage
        } = this.state
        return (
            <DatePickerStyled>
                <Layout>
                    <Header />
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Modal
                            title="Add Collection"
                            visible={collectionPopup}
                            closable={false}
                            footer={[
                                <Button key={1} onClick={this.handleCancel} disabled={saveCollectionsMessage !== ''}>Cancel</Button>,
                                <Button key={2} onClick={this.handleOk}>Ok</Button>
                            ]}
                            maskClosable={false}
                        >
                            {
                                (saveCollectionsMessage !== '' && saveCollectionsMessage === 'success') && (
                                    <Alert
                                        message="Collection is saved"
                                        type="success"
                                        closable
                                        afterClose={this.handleCloseAlert}
                                    />
                                )
                            }
                            {
                                (saveCollectionsMessage !== '' && saveCollectionsMessage !== 'success') && (
                                    <Alert
                                        message="This Restaurant is already added as collection"
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseAlert}
                                    />
                                )
                            }
                            {
                                saveCollectionsMessage === '' && (
                                    <CollectionInput
                                        value={restaurantName}
                                        onChange={this.onChangeCollectionName}
                                    />
                                )
                            }
                            
                        </Modal>
                        <Col span={12}>
                            <Spin spinning={loading}>
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
                                                showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
                                            />
                                            <Button 
                                                type='primary' 
                                                className='btn-filter'
                                                onClick={this.onSearch}
                                            >
                                                Search
                                            </Button>
                                        </div>
                                        <Card 
                                            data={restaurants}
                                            collectionPopup={this.onClickCollection}
                                        />
                                    </div>
                                </Content>
                            </Spin>
                        </Col>
                    </Row>
                    <Footer />
                </Layout>
            </DatePickerStyled>
        )
    }
}

export default connect(
    state => ({
        Restaurants: state.Restaurants,
        Auth: state.Auth
    }),
    {getRestaurants, searchRestaurants, saveCollections, getUserDetails, resetRedux}
)(Home)
