import Thumb from '../components/Thumb'
import React from 'react'
import Footer from '../components/Footer'

function Home(props) {
    return(
        <React.Fragment>
            <Thumb data={props.data}/>
        </React.Fragment>
    )
}

export default Home