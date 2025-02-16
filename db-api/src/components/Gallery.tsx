import React from 'react'

import { Link } from "react-router-dom";


const Gallery = () => {

    const cards = [
        {
            name: "Characters",
            img: "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2024/03/11113142/best-strongest-dragon-ball-z-characters-ranked-master-roshi-goku-krillin.jpg",
            route: "/characters"
        },
        {
            name: "Planets",
            img: "https://www.mundodeportivo.com/alfabeta/hero/2023/10/estos-son-todos-los-planetas-que-han-aparecido-en-dragon-ball-a-lo-largo-de-los-anos.jpg?width=1200",
            route: "/planets"
        }   
    ];

  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                cards.map((card) => (
                    <div key={card.name}>
                        <Link to={card.route}>
                            <div className='object-cover'>
                                <img className="h-auto max-w-full rounded-lg" src={card.img} alt="" />
                            </div>
                            <p>{card.name}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Gallery
