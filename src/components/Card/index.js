import React from 'react'
import {Icon} from 'antd'
import {CardContainer} from './card.style'

class Card extends React.Component {
    render() {
        const {data} = this.props
        if (data.length > 0) {
            const mapRestaurants = data.map((val, index) => {
                return (
                    <CardContainer 
                        key={index}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p><strong>{val.name}</strong></p>
                            <span>
                                <Icon 
                                    type="star"
                                    style={{cursor: 'pointer'}}
                                />
                            </span>
                        </div>
                        <div>{val.open}</div>
                    </CardContainer>
                )
            })
            return mapRestaurants
        }
        return <div style={{textAlign: 'center', marginTop: '30px'}}>No Restaurant found</div>
    }
}

export default Card