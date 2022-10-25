import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"
import { Route, Routes } from "react-router-dom"
import HousePorch from './HousePorch'

function SpookyStreet() {
    const [houses, setHouses] = useState([])
    const [houseIndex, setHouseIndex] = useState(0)

    let start = houseIndex
    let end = houseIndex + 4

    useEffect(() => {
        fetch('http://localhost:3001/houses')
            .then(r => r.json())
            .then(h => setHouses(h))
    }, [])

    function renderHouses() {
        const fourHouses = houses.slice(start, end)
        return fourHouses.map(house => <HouseCard key={house.id} house={house}
        />
        )
    }

    return (
        <div className="street">
            <div className="belt">
                {renderHouses()}
                <button onClick={() => setHouseIndex(houseIndex + 1)}>keep walkin</button>
            </div>
            
            <EnergyBar />
            <CandyBucket />
            <Routes>
                <Route
                    path="/porch"
                    element={<HousePorch />} />
            </Routes>
        </div>
    )
}

export default SpookyStreet