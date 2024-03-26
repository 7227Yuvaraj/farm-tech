
import React from 'react';
//import PropTypes from 'prop-types';

// Import images
import burgImage from './images/burg.png';
import fd1Image from './images/fd1.jpg';
import fd2Image from './images/fd2.jpg';
import fd3Image from './images/fd3.jpg';
import fd4Image from './images/fd4.jpg';
import fd5Image from './images/fd5.jpg';
import fd6Image from './images/fd6.jpg';
import g1Image from './images/g1.jpg';
import g2Image from './images/g2.jpg';
import g3Image from './images/g3.jpg';
import g4Image from './images/g4.jpg';

export default function Container(props) {


  return (
    <div>
      <div className="container">
      {/* NavBar */}
        <nav>
          <div className="logo">
            <h1>Deshmukhi Express</h1>
          </div>
          <ul>
            <li><a href="">HOME </a></li>
            <li><a href="#food">FOOD</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#blog">BLOGS</a></li>
          </ul>
          <div className="icons">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <i id="bar" className="fa-solid fa-bars"></i>
        </nav>

{/* image side text */}
        <div className="main">
          <div className="mainText">
            <h1>Order From Deshmukhi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Consequuntur enim corporis sunt! Vero, minus ducimus, nulla <br/>
              accusantium maxime tempora cum quod repellendus odit quibusdam <br/>
              dignissimos?
            </p>
            <button>Explore</button>
          </div>
          <img src={burgImage} alt="Burger" />
        </div>

        <div id="food">
          <div className="head">
            <h1>Our Foods</h1>
          </div>
          <div className="foodCard">
            <div className="card">
              <img src={fd1Image} alt=""/>
              <p>Foods You Like</p>
              <p>Free Delivery</p>
            </div>
            <div className="card">
              <img src={fd2Image} alt=""/>
              <p>Foods You Like</p>
              <p>Free Delivery</p>
            </div>

            <div className="card">
                    <img src={fd3Image} alt=""/>
                    <p>Foods You Like</p>
                    <p>Free Deliveery</p>
                </div>
                <div className="card">
                    <img src={fd4Image} alt=""/>
                    <p>Foods You Like</p>
                    <p>Free Deliveery</p>
                </div>
                <div className="card">
                    <img src={fd5Image} alt=""/>
                    <p>Foods You Like</p>
                    <p>Free Deliveery</p>
                </div>
                <div className="card">
                    <img src={fd6Image} alt=""/>
                    <p>Foods You Like</p>
                    <p>Free Deliveery</p>
                </div>
            {/* Repeat similar structure for other food cards */}
          </div>
        </div>

        <div id="gallery">
          <div className="head">
            <h1>Foods Gallery</h1>
          </div>
          <div className="gallery">
            <img src={g1Image} alt=""/>
            <img src={g2Image} alt=""/>
            <img src={g3Image} alt=""/>
            <img src={g4Image} alt=""/>
            <img src={g4Image} alt=""/>
            <img src={fd3Image} alt=""/>
            {/* Repeat similar structure for other gallery images */}
          </div>
        </div>

        <div id="blog">
          <div className="head">
            <h1>Read Blogs</h1>
          </div>
          <div className="blogs">
            <div className="blogCard">
              <img src={g2Image} alt=""/>
              <div className="blogText">
                <h2>Upto 50% Off on Bulk Order</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minus, aliquam, a quis
                    sapiente saepe ipsam rem voluptate praesentium numquam consequuntur fugiat?</p>
                <a href="https://iamafoodblog.com/">Read Now</a>
              </div>
            </div>
            <div className="blogCard">
              <img src={fd2Image} alt=""/>
              <div className="blogText">
                <h2>Upto 50% Off on Bulk Order</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minus, aliquam, a quis
                    sapiente saepe ipsam rem voluptate praesentium numquam consequuntur fugiat?</p>
                <a href="https://iamafoodblog.com/" target="_blank">Read Now</a>
              </div>
            </div>
            {/* Repeat similar structure for other blog cards */}
          </div>
        </div>

        <div className="footer">
          <div className="text">
            <h2>About Us</h2>
            <p>Fresh Food</p>
            <p>Quality</p>
            <p>Affordable</p>
            <p>Offers</p>
          </div>
          <div className="text">
            <h2>Top Dishes</h2>
            <p>Paneer</p>
            <p>Burgers</p>
            <p>Pizza</p>
            <p>Fast Food</p>
          </div>
          <div className="text">
            <h2>Offer</h2>
            <p>50% OFF</p>
            <p>Bulk Order</p>
            <p>Coupons</p>
            <p>Offers</p>
          </div>
          <div className="text">
            <h2>Connect on</h2>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <div className="loadPage">
        <div id="headLoader"></div>
        <div className="mainLode"></div>
        <div className="cards">
          <div className="cardLoad"><p></p></div>
          <div className="cardLoad"><p></p></div>
          <div className="cardLoad"><p></p></div>
        </div>
      </div>
    </div>
  );
}
export default Container
