import React from 'react'
import Footer from '../../components/Footer/Footer'
import Thumb from '../../components/Thumb/Thumb'
import Header from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import bannerImg from '../../assets/banner.jpg'


function Home(props) {
    return(
        <React.Fragment>
            <header>
                <Header />
                <Banner img={bannerImg}/>
            </header>
            <body>
                <Thumb data={props.data}/>
            </body>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}

export default Home