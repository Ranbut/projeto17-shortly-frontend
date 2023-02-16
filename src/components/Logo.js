import styled from 'styled-components';
import LogoImg from '../assets/logo.svg'

export default function Logo() {
    return (
    <Container>
        Shortly
        <img src={LogoImg} alt='shortly-logo'/>           
    </Container>);
  }

  const Container = styled.div`
    position: relative;
    left: 40%;

    margin-top: 80px;

    width: 204px;
    height: 80px;

    font-style: normal;
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
    color: #000000;

    display: flex;

    img{
        margin-left: 8px;
    }
`
