import React from 'react'
import PaintingView from './PaintingView'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const originalItem = { ...menuItem }
        const { id, title, image, description, price_original, dimensions } =
          menuItem
        return (
          <article key={id} className="menu-item">
            <img src={image} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price_original}</h4>
              </header>
              <p className="item-text">{description}</p>

              <PaintingView originalItem={originalItem} />
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
