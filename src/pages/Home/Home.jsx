import React from 'react'
import Footer from '../../components/Footer/Footer'
import Thumb from '../../components/Thumb/Thumb'
import Banner from '../../components/Banner/Banner'
import bannerImg from '../../assets/banner.jpg'


function Home(props) {
    return(
        <React.Fragment>
            <header>
                <Banner img={bannerImg}/>
            </header>
            <Thumb data={props.data}/>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}

export default Home