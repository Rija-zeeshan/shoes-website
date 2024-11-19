import React from 'react'
import Image from 'next/image'

const Shoes = () => {
    const shoesData = [
        { id: 1, name: 'high heel', price: 10000, description: 'high heel shoes', image:'image/black.png' },
        { id: 2, name: 'high heel', price: 8000, description: 'high heel shoes', image:'image/silver.jpg' },
        { id: 3, name: 'high heel', price: 6000, description: 'high heel shoes', image:'image/pink.jpg' },
        { id: 4, name: 'high heel', price: 4000, description: 'high heel shoes', image:'image/b.jpg' },
        { id: 5, name: 'high heel', price: 7000, description: 'high heel shoes', image:'image/golden.webp' },
        { id: 6, name: 'high heel', price: 12000, description: 'high heel shoes', image:'image/gold.jpg' },

    ]
  return (
    <div>
      <div className="shoes">
        {shoesData.map((shoes) =>(
            <div key={shoes.id} className="shoes-card">
                <Image src={shoes.image} alt={shoes.name} height={200} width={200}/>
                <h3>{shoes.name}</h3>
                <p>{shoes.description}</p>
                <div className="price"> ${shoes.price}</div>
                <button>Add to cart</button>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Shoes
