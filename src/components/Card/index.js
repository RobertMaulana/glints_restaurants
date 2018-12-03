import React from 'react'
import {Icon} from 'antd'
import {CardContainer} from './card.style'
import moment from 'moment'

class Card extends React.Component {
    onFavourite = (id, name) => {
        this.props.collectionPopup(id, name, true)
    }
    invitation(name, colId, userId) {
        this.props.invitationCollaborate(name, colId, userId)
    }
    render() {
        const {data, users, collections} = this.props
        if (collections !== undefined && data === undefined) {
            const mapCollections = collections.map((val, index) => {
                return (
                    <CardContainer 
                        key={index}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p><strong>{val.collection.name}</strong></p>
                            <div className='action-card'>
                                <div className='action-container'>
                                    <Icon type="mail" onClick={() => this.invitation(val.collection.name, val.collectionId, val.userId)}/>
                                    <Icon type="edit" />
                                    <Icon type="delete" />
                                </div>
                                {/* {
                                    val.collections_restaurants.length > 0 ? (
                                        <Icon type="star" theme="filled" />
                                    ) : (
                                        <Icon 
                                            type="star"
                                            style={{cursor: 'pointer'}}
                                            onClick={() => this.onFavourite(val.id, val.name)}
                                        />
                                    )
                                } */}
                            </div>
                        </div>
                        <div>Created at: {moment(val.createdAt).format('YYYY-MM-DD hh:mm:ss')}</div>
                    </CardContainer>
                )
            })
            return mapCollections
        }
        if (data.length > 0) {
            const mapRestaurants = data.map((val, index) => {
                return (
                    <CardContainer 
                        key={index}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p><strong>{val.name}</strong></p>
                            <span>
                                {
                                    val.collections_restaurants.length > 0 ? (
                                        <Icon type="star" theme="filled" />
                                    ) : (
                                        <Icon 
                                            type="star"
                                            style={{cursor: 'pointer'}}
                                            onClick={() => this.onFavourite(val.id, val.name)}
                                        />
                                    )
                                }
                            </span>
                        </div>
                        <div>{val.open}</div>
                    </CardContainer>
                )
            })
            return mapRestaurants
        }
        return <div style={{textAlign: 'center', marginTop: '30px'}}></div>
    }
}

export default Card