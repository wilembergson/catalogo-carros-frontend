import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import api from "../api/apiConnections"
import SearchBar from "../components/SearchBar"
import { Button } from "../components/SharedStyles"
import Vehicle from "../components/vehicle"
import VehicleData from "../components/vehicleData"
import UserContext from "../context/UserContext"

export default function InitialPage(){
    const [vehicles, setVehicles] = useState<any[]>([])
    const { selectedVehicle } = useContext(UserContext)
    const { logged } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        const promise = api.listVehicles()
        promise.then(response => setVehicles(response.data))
    }, [selectedVehicle])

    return(
        <Main>
            {selectedVehicle === 0 ?
                <>
                    <SearchBar/>
                    <Title>CARROS USADOS</Title>
                    { logged ? 
                        <ButtonContainer>
                            <Button onClick={() => navigate("/register-car")}>+ Adicionar carro</Button>
                        </ButtonContainer> : <></>
                    }
                    <VehiclesContainer>
                        {vehicles?.map(item => <Vehicle data={item}/>)}
                    </VehiclesContainer>
                </>
                : <VehicleData/>
            }
            
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const VehiclesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin-top: 20px;
`
const Title = styled.label`
    width: 70%;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-top: 30px;
    margin-left: 20px;
`
const ButtonContainer = styled.div`
    display: flex;
    width: 70%;
`