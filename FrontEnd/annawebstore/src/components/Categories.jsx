import React from 'react'

const Categories = ({ categories, filterItems, setCallAPI }) => {
  if (categories.length === 1) {
    return (
      <div className="btn-container">
        <button
          type="button"
          className="filter-btn"
          onClick={() => setCallAPI(true)}
        >
          Return
        </button>
        {categories.map((category, index) => {
          return (
            <>
              <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            </>
          )
        })}
      </div>
    )
  }
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
