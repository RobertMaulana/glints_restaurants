import React from 'react'
import {connect} from 'react-redux'
import { Layout, DatePicker, Row, Col, Button, Spin } from 'antd'
import {DatePickerStyled} from './home.style'
import moment from 'moment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import restaurantActions from '../../redux/restaurants/actions'

const { Content } = Layout
const {getRestaurants, searchRestaurants} = restaurantActions

class Home extends React.Component {
    state = {
        date: '',
        loading: true,
        restaurants: []
    }
    componentWillReceiveProps(nextProps) {
        const {getRestaurantMessage, restaurants} = nextProps.Restaurants
        if (getRestaurantMessage !== '') {
            this.setState({
                restaurants,
                loading: false
            })
        }
    }
    componentDidMount() {
        this.props.getRestaurants()
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
    render() {
        const {loading, restaurants} = this.state
        return (
            <DatePickerStyled>
                <Layout>
                    <Header />
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
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
                                        <Card data={restaurants}/>
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
        Restaurants: state.Restaurants
    }),
    {getRestaurants, searchRestaurants}
)(Home)
