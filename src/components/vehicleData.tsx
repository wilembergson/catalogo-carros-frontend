import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import UserContext from "../context/UserContext"
import api from "../api/apiConnections"

type Vehicle = {
    id: number
    name: string;
    brand: string;
    model: string;
    price: number;
    picture: string;
}

export default function VehicleData(){
    const { selectedVehicle, setSelectedVehicle } = useContext(UserContext)
    const initialVehicle:Vehicle = {
        id:0,
        name:'',
        brand:'',
        model:'',
        price:0,
        picture:''
    }
    const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle)

    useEffect(() => {
        const promise = api.getVehicleById(selectedVehicle)
        promise.then(response => setVehicle(response.data))
    }, [])

    return(
        <Content>
            <Title>Detalhes do veículo</Title>
            <VehicleContent>
                <Image src={vehicle.picture}/>
                <VehicleNamePrice>
                    <Name>{vehicle.name} {vehicle.brand} {vehicle.model}</Name>
                    <Price>R$ {vehicle.price}</Price>
                </VehicleNamePrice>
            </VehicleContent>
            <Button onClick={() => setSelectedVehicle(0)}>Voltar</Button>
        </Content>
    )
}

const Button = styled.button`
    width: 110px;
    color: #fff;
    background: #3f73b8;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    cursor: pointer;
    :hover{
        background: #589af0;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`
const VehicleContent = styled.section`
    display: flex;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 30px;
`
const Image = styled.img`
    width: 30%;
    height: 270px;
`
const Title = styled.label`
    width: 70%;
    font-size: 25px;
    font-weight: 300;
    margin: 30px 0;
    
`
const VehicleNamePrice = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 30px;

`
const Name = styled.label`
    font-size: 30px;
    font-weight: 800;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
`
const Price = styled.label`
    margin: 10px;
    font-size: 45px;
    font-weight: 500;
    color: #6e6eec;
    font-family: 'Roboto', sans-serif;
`