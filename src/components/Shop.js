import React, { Component } from 'react';
import Card from '../components/Card'
import axios from 'axios';
import Footer from '../components/Footer';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData:[]
        }
    }
    componentDidMount(){
          axios.get('https://course-api.com/react-store-products')
        .then(response=>{
             console.log('rensponsedata',response.data); 
             this.setState({apiData:response.data})
         })
            window.scrollTo(0, 0)    
      
    }
    render() {
        let {apiData}=this.state;
        return (<div className='section-wrapper'>
            <div className="page-title-section">
                <div className="container">
                    <h1 className="page-title">Shop Our Products </h1>
                </div>
            </div>
            <div className="content-section featured-section">
                <div className="container">
                    <div className="w-dyn-list">
                        <div role='list' className="w-dyn-items">
                            <div role='listitem' className="w-dyn-item">
                                <a className='featured-wrapper w-inline-block'>
                                    <div className="pill-2 badge primary featured">Featured Item</div>
                                    <div className="feature-text-wrapper">
                                        <h3 className="featured-item-name">White Tent</h3>
                                        <div className="featured-price">$&nbsp;200.00&nbsp;USD</div></div>
                                    <div className="featured-gradient-overlay"></div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="shop-page-wrapper">
                        <div className="shop-category-menu">
                            <h2 className="category-menu-heading">Shop by Category</h2>
                            <div className="w-dyn-list">
                                <div role='list' className="w-dyn-items">
                                    <div role='listitem' className="category-menu-item w-dyn-item">
                                        <a href="/category/gift-cards" className="btn blackandwhite">Gift Cards</a>
                                    </div>
                                    <div role="listitem" className="category-menu-item w-dyn-item">
                                        <a href="/category/tents" className="btn blackandwhite">Tents</a>
                                    </div>
                                </div>
                                <div role="listitem" className="category-menu-item w-dyn-item">
                                    <a href="/category/accessories" className="btn blackandwhite">Accessories</a>
                                </div>
                            </div>
                            <div role="listitem" className="category-menu-item w-dyn-item">
                                <a href="/category/packs" className="btn blackandwhite">Packs</a>
                            </div>
                        </div>
                        <div className="shop-list">
                            <div className="products-list-wrapper w-dyn-list">
                                <div className="products-list w-dyn-items">
                                  <div className="w-dyn-item">
                                  <div className="shop-item-wrapper">
                                  {apiData?.map((item,index) =>
                                  <Card
                                  index={index}
                                  product ={item}
/>
                                            )}

                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>// shop wrapper
        );
    }
}

export default Shop;



