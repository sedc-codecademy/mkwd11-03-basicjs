function card(data) {
    return `
    <div class="cardsContainer__card">    
        <div class="cardsContainer__card__left">
            <h3>Ship name: ${data.name}</h3>
            <h3>Ship model: ${data.model}</h3>
            <h3>Hyperdrive rating: ${data.hyperdrive_rating}</h3>
            <h3>Passenger Capacity: ${data.passengers}</h3>                        
        </div>
        <div class="cardsContainer__card__right">
            <h3>Cost: ${data.cost_in_credits}</h3>
            <h3>Cargo: ${data.cargo_capacity}</h3>
            <h3>Class: ${data.starship_class}</h3>
            <h3>Crew: ${data.crew}</h3>  
        </div>    
    </div>    
    `
}

export default card;