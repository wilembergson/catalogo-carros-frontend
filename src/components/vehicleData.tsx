import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import UserContext from "../context/UserContext"
import api, { VehicleInsertData } from "../api/apiConnections"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa"
import RegisterForm from "../pages/RegisterForm"
import { Button, Title } from "./SharedStyles"

type Vehicle = {
    id: number
    name: string;
    brand: string;
    model: string;
    price: number;
    picture: string;
}

export default function VehicleData(){
    const { selectedVehicle, setSelectedVehicle, logged } = useContext(UserContext)
    const initialVehicle:Vehicle = {
        id:0,
        name:'',
        brand:'',
        model:'',
        price:0,
        picture:''
    }
    const [vehicle, setVehicle] = useState<Vehicle>(initialVehicle)
    const [dataToChange, setDataToChange] = useState<VehicleInsertData>()
    const [editing, setEditing] = useState<boolean>(false)

    async function deleteVehicle(){
        try{
            await api.deleteVehicle(selectedVehicle)
            window.location.reload()
        }catch(error:any){
            alert(error.response.data.error)
        }
    }

    function changeEditing(){
        if(editing){
            setEditing(false)
        }else{
            setDataToChange({
                name:vehicle.name,
                brand:vehicle.brand,
                model: vehicle.model,
                price: vehicle.price.toString(),
                picture: vehicle.picture
            })
            setEditing(true)
        }
    }
    useEffect(() => {
        const promise = api.getVehicleById(selectedVehicle)
        promise.then(response => setVehicle(response.data))
    }, [vehicle])

    return(
        <Content>
            <Title>Detalhes do veículo</Title>
            <VehicleContent>
                <DataContainer>
                    <Image src={vehicle.picture}/>
                    <VehicleNamePrice>
                        <Name>{vehicle.name} {vehicle.brand} {vehicle.model}</Name>
                        <Price>R$ {vehicle.price}</Price>
                    </VehicleNamePrice>
                </DataContainer>
                {logged ? 
                    <IconsContainer>
                        <FaRegEdit onClick={() => changeEditing()} size={'40px'} cursor={'pointer'}/>
                        <RiDeleteBin6Line onClick={() => deleteVehicle()} size={'40px'} cursor={'pointer'}/>
                    </IconsContainer>
                    : <></>
                }
            </VehicleContent>
            {editing ? 
                <RegisterForm  update={true}
                                id={vehicle.id}
                                dataUpdate={dataToChange}
                                setEditing={setEditing}/> 
                : <></>
            }
            <Button onClick={() => setSelectedVehicle(0)}>Voltar</Button>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 60px;
`
const VehicleContent = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 30px;
`
const Image = styled.img`
    width: 30%;
    height: 270px;
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
const IconsContainer = styled.div`
    display: flex;
    color: #3f73b8;
    margin: 10px;
`
const DataContainer = styled.div`
    display: flex;
    width: 95%;
`