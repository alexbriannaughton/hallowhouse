
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { render } from "@testing-library/react"

function SpookyStreet({ selectedAvatar, houses, houseIndex, setHouseIndex, ghostLoc, setGhostLoc}) {
    let start = houseIndex
    let end = houseIndex + 4

    const navigate = useNavigate()

    function renderHouses() {
        const fourHouses = houses.slice(start, end)
        return fourHouses.map(house => <HouseCard key={house.id} house={house}
        />
        )
    }

    useEffect(() => {
        function handleKeyPress(e) {
            if(e.key==='ArrowRight'){
                setGhostLoc(ghostLoc+5)
            }
            else if (e.key==='ArrowLeft'){
                setGhostLoc(ghostLoc-5)
            }
            else if (e.key==='ArrowUp'){
                navigate('/porch')
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    if (ghostLoc>680){
        setGhostLoc(-590)
        setHouseIndex(houseIndex+4)
    }

    if (ghostLoc<-595){
        setGhostLoc(675)
        setHouseIndex(houseIndex-4)
    }

    let Username = "Spooky";
 

    return (
        <div>
            <div className="belt">
                {renderHouses()}
                <button className="more-button" onClick={() => setHouseIndex(houseIndex + 1)}>keep walkin</button>
            </div>
            <div className="road-div">
                <img
                    src="https://cliparting.com/wp-content/uploads/2016/10/Road-bitumen-clipart-by-megapixl.jpg"
                    style={{ width: "100%", height: "150px", position: "absolute", left: "0%"}}
                />
                <img
                    src={selectedAvatar}
                    className="avatar"
                    style={{left: `${ghostLoc}px`}}
                />
            </div>
            <div className="grass">.</div>
            <div>
            </div>
            <EnergyBar />
            <CandyBucket />
        </div>
    )
}

export default SpookyStreet