import React from 'react'

class App extends React.Component {
    componentDidMount() {
        const api = 'http://localhost:30001/api'
        fetch(api)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    render () {
        return (
            <div>Home</div>
        )
    }
}

export default App
