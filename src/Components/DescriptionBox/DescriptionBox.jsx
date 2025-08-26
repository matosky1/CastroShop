import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
       <p>My e-commerce app is a modern online platform that allows users to browse, discover, 
        and purchase products with ease. It provides a seamless shopping experience where
         businesses can showcase their items and customers can explore, interact, and place orders directly through the app. 
         Designed for convenience and accessibility, it makes shopping faster, smarter, and more engaging—bringing the store experience straight to your device.
         </p>
         <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
          </p>
      </div>
    </div>
  )
}

export default DescriptionBox