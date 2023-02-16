import { Container, RankingText, ContainerRecord, CreateMsg } from "./styles.js";
import RankingImg from '../../assets/ranking.svg'
import Record from "../../components/Record.js";

export default function Home() {

    const records = [
    {
      name: "Fulaninha",
      links: 32,
      views: 1703584
    },
    {
      name: "Ciclano",
      links: 20,
      views: 1113347
    },
    {
      name: "Beltrana",
      links: 18,
      views: 852961
    },
    {
      name: "Joaozin",
      links: 14,
      views: 492173
    },
    {
      name: "DEFINITIVAMENTE_NAO_E_UM_BOT",
      links: 12345252,
      views: 37707
    }
  ]

    return (
    <Container>
      <RankingText>
        <img src={RankingImg} alt="ranking-img" />
        Ranking
      </RankingText>
      <ContainerRecord>
      <ol>
        {records.map(
                (p) => <Record record={p} key={p.name}/>
        )}
      </ol>
      </ContainerRecord>
      <CreateMsg>Crie sua conta para usar nosso serviço!</CreateMsg>
    </Container>
    );
  }