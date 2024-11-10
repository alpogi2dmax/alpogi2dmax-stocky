import React from 'react'
import ShoeCard from './ShoeCard'

function ShoeList({shoes}) {
    return (
        <div>
            {shoes.map(shoe => (
                <ShoeCard key={shoe.id} shoe={shoe}/>
            ))}
        </div>
    )
}

export default ShoeList