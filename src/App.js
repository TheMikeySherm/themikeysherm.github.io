import { Screen, Container, Banner, Avatar, Row, SpaceEvenly, Icon, Card, Para, Title, Col, Cell, Anchor, Logo,} from "./components/lib";
import headshot from './assets/headshot.png';
import LinkedIn from './assets/icon/linkedin.png'
import GitHub from './assets/icon/github.png'
import Medium from './assets/icon/medium.png'
import SouthernMail from './assets/icon/sms.png'
import SeaWatch from './assets/icon/seawatch.png'
import GFM from './assets/icon/gfm.png'
import SNHU from './assets/icon/snhu.png'
import USCGA from './assets/icon/uscga.png'
import YardBros from './assets/icon/yardbros.png'
import SeaWeeds from './assets/icon/seaweeds.png'

function App() {
  return (
    <Screen>
      <Banner>
        <Row>
          <Anchor href="https://www.linkedin.com/in/themikeysherm/" target="_blank">
            <Icon src={LinkedIn} alt={'Linkedin'} />
          </Anchor>
          <Anchor href="https://github.com/TheMikeySherm" target="_blank">
            <Icon src={GitHub} alt={'GitHub'} />
          </Anchor>
          <Anchor href="https://medium.com/@mikeysherm" target="_blank">
            <Icon src={Medium} alt={'Medium'} />
          </Anchor>
        </Row>
      </Banner>
      <Container>
        <Avatar src={headshot} alt={'avatar'} />
        <i>Hard work becomes talent.</i>
        <b>My work ethic is ineffable.</b>
        <Para>
          I am a Computer Scientist (CS) passionate about learning and using my skills to pursue
          new discoveries within my field. After my time in the US Coast Guard, I completed
          my Bachelor's degree in 2 years while working fulltime and graduated Magna Cum Laude. As a self-study,
          I have learned to build mobile and web applications, cloud infrastructures,
          and have ventured into penetration testing with Kali Linux and Quantum
          Computing with Python.
        </Para>
      </Container>
      <Container>
        <Title>Experience</Title>
        <Para>
          At <Anchor href="https://southernmail.com/" target="_blank">Southern Mail</Anchor>, I plan, design, build, and integrate new programs;
          saving time, money, and provide greater visibility of day-to-day operations.
          I rebuilt, re-platformed, and migrated legacy applications to modern languages and
          facilitated integrations between SMS and the United States Postal Service.
        </Para>
        <Para>
          As a Freelancer, I enjoy helping others turn ideas into reality. 
          My expirence encompasses simple landing pages like <Anchor href="https://yardbrosmd.com/" target="_blank">YardBros</Anchor>,  
          to complex mobile apps and online shops, the former <Anchor href="https://play.google.com/store/apps/details?id=com.seawatchapp" target="_blank">Sea Watch</Anchor> and
          the latter <Anchor href="https://seaweedsbythesea.com/" target="_blank">Sea Weeds</Anchor>.
        </Para>
        <Row>
          <Logo src={SouthernMail} alt={'southern mail'} />
          <Logo src={SeaWatch} alt={'sea watch'} />
          <Logo src={GFM} alt={'go freight masters'} />
          <Logo src={YardBros} alt={'yardbros'} />
          <Logo src={SeaWeeds} alt={'seaweeds'} />
        </Row>
      </Container>
      <Container>
        <Title>Eduction</Title>
        <Para>
          Continous research is a must! I actively seek new information in the form of workshops, conferences, and good ol' fashion reading. 
          I also do my best to surround myself with like minded individuals who want to push the boundries of possible. 
        </Para>
        <Para>
          At SNHU, I studied Computer Sciense with a focus in Software Engineering and earned Magna Cum Laude honors. Prior to attending SNHU,
          I attended the United States Coast Guard Academy and studied Naval Architecture and Marine Engineering.
          As an Undergrad at the Academy, I recieved
          Undergraduate Paper of the Year, from the Society of Naval Architects and Marine Engineers.
        </Para>
        <Row>
          <Logo src={SNHU} alt={'snhu'} />
          <Logo src={USCGA} alt={'uscga'} />
        </Row>
      </Container>
      <Container>
        <Title>Fun Facts</Title>
        <Row>
          Fishing
        </Row>
      </Container>
    </Screen>
  );
}

export default App;
