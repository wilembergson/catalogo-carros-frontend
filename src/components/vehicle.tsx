import styled from "styled-components"

export default function Vehicle(props:any){
    const { data } = props

    return(
        <Body>
            <Image src={data.picture}/>
            <Name>{data.name} {data.brand} {data.model}</Name>
            <Price>R$ {data.price}</Price>
        </Body>
    )
}

const Body = styled.section`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 260px;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.363) 0px 2px 8px 0px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 170px;
`
const Name = styled.label`
    font-weight: 800;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
`
const Price = styled.label`
    margin: 10px;
    font-size: 25px;
    font-weight: 500;
    color: #6e6eec;
    font-family: 'Roboto', sans-serif;
`