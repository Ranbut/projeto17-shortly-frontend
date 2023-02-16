import styled from 'styled-components';

export default function Header() {
    return (
    <HeaderContainer>
        <LoggedText>Seja bem-vindo(a), Pessoa!</LoggedText>
        <Options>
            <p>
                Home
            </p>
            <p>
                Ranking
            </p>
            <p>
                Sair
            </p>
        </Options>
    </HeaderContainer>
    );
  }

const HeaderContainer = styled.header`
    margin-top: 30px;
    display: flex;
    justify-content:space-between;
    margin-left: 200px;
`

const LoggedText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #5D9040;
`

const Options = styled.div`
    margin-right: 200px;
    display: flex;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #9C9C9C;

    p{
        margin-left: 27px;
    }
`