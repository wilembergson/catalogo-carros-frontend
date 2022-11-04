import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import api, { VehicleInsertData } from "../api/apiConnections"
import { Button, ButtonCancel, Form, Input, Label, Title } from "../components/SharedStyles"

export default function RegisterForm(props?:any){
    const { update, id, dataUpdate, setEditing } = props
    const initialData:VehicleInsertData = {
        name: '',
        brand: '',
        model: '',
        price: '',
        picture: ''
    }
    const navigate = useNavigate()
    const [formData, setFormData] = useState(update ? dataUpdate : initialData)

    function handleChange(e:any) {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        const vehicle = {...formData}
        try{
            if(update){
                await api.updateVehicle(id, vehicle)
                setEditing(false)
            }else{
                await api.newVehicle(vehicle)
                navigate("/")
            }
        }catch(error:any){
            alert(error.response.data.error)
            console.log(error.response.data)
        }
    }

    return(
        <Body>
            <Title>{update ? "Atualizar dados" : "Adicionar carro"}</Title>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Label>Nome</Label>
                    <Input
                            placeholder="Nome"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="name"
                            value={formData.name}
                            required
                    />
                    <Label>Marca</Label>
                    <Input
                            placeholder="Marca"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="brand"
                            value={formData.brand}
                            required
                    />
                    <Label>Modelo</Label>
                    <Input
                            placeholder="modelo"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="model"
                            value={formData.model}
                            required
                    />
                    <Label>Preço</Label>
                    <Input
                            placeholder="Preço"
                            type="number"
                            onChange={(e) => handleChange(e)}
                            name="price"
                            value={formData.price}
                            required
                    />
                    <Label>Foto</Label>
                    <Input
                            placeholder="Insira o link da foto"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="picture"
                            value={formData.picture}
                            required
                    />
                    <ButtonsContainer>
                        <Button>Salvar</Button>
                        <ButtonCancel onClick={() => { update ? setEditing(false) : navigate("/")}}>
                            Cancelar
                        </ButtonCancel>
                    </ButtonsContainer>
                    
                </Form>
            </Content>
        </Body>
    )
}

const Body = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    height: 700px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`