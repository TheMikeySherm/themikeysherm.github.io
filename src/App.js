import { Screen, Container, Banner, Avatar, Row, Center, Icon, Card, Tile, Para, Title, Col, Cell, Anchor, Logo, MiniText, IconResize, Image } from "./components/lib";
import Headshot from './assets/me/headshot.png';
import Shark from './assets/me/shark.png';
import Kayak from './assets/me/kayak.png';
import Biking from './assets/me/biking.png';
import Mountain from './assets/me/mountain.png';
import Scuba from './assets/me/scuba.png';
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
import Email from './assets/icon/email.png'
import Mobile from './assets/icon/mobile.png'


function App() {
  return (
    <Screen>
      <Banner>
        <Anchor href="https://www.linkedin.com/in/themikeysherm/" target="_blank">
          <Icon src={LinkedIn} alt={'Linkedin'} />
        </Anchor>
        <Anchor href="https://github.com/TheMikeySherm" target="_blank">
          <Icon src={GitHub} alt={'GitHub'} />
        </Anchor>
        <Anchor href="https://medium.com/@mikeysherm" target="_blank">
          <Icon src={Medium} alt={'Medium'} />
        </Anchor>
      </Banner>
      <Container>
        <Col>
          <Avatar src={Headshot} alt={'avatar'} />
          <Para>
            <b>Hard work becomes talent.</b>
          </Para>
          <Para>
            I am a Computer Scientist (CS) passionate about learning and using my skills to pursue
            new discoveries within my field. After my time in the US Coast Guard, I completed
            my Bachelor's degree in 2 years while working fulltime and graduated Magna Cum Laude. As a self-study,
            I have learned to build mobile and web applications, cloud infrastructures,
            and have ventured into penetration testing with Kali Linux and Quantum
            Computing with Python.
          </Para>
          <Para>
            <b>I improve everyday.</b>
          </Para>
          <Para>
            I surround myself with professional coaches who believe in me as much as I believe in myself.
            I seek feedback and reflect on criticisms. By doing so, I improve my abilities and emotional intelligence; 
            helping me become a better person. 
          </Para>
          <Para>
            <b>I am amazing.</b>
          </Para>
          <Para> 
            I believe in self-affirmation and in the affirmation of others. 
            <i> As one stone sharpens another, so do we. </i> 
            I believe we can accomplish more by building each other up. 
          </Para>
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Experience</Title>
          <Para>
            At <Anchor href="https://southernmail.com/" target="_blank">Southern Mail (SMS)</Anchor>, I plan, design, build, and integrate new programs;
            saving time and money, while also providing greater visibility of day-to-day operations.
            I rebuilt, re-platformed, and migrated legacy applications to modern languages and
            facilitated integrations between SMS and the United States Postal Service.
          </Para>
          <Para>
            As a Freelancer, I enjoy helping others turn ideas into reality.
            My experience encompasses simple landing pages like <Anchor href="https://yardbrosmd.com/" target="_blank">YardBros</Anchor>,
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
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Eduction</Title>
          <Para>
            At SNHU, I studied Computer Science  with a focus in Software Engineering and earned Magna Cum Laude honors. Prior to attending SNHU,
            I attended the United States Coast Guard Academy and studied Naval Architecture and Marine Engineering.
            As an Undergrad at the Academy, I received
            Undergraduate Paper of the Year, from the Society of Naval Architects and Marine Engineers.
          </Para>
          <Row>
            <Logo src={SNHU} alt={'snhu'} />
            <Logo src={USCGA} alt={'uscga'} />
          </Row>
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Life Outside CS</Title>
          <Para>
            When I am taking a break from my passion, I am definitly exploring with my wife Kelly.
          </Para>
          <Row>
            <Image src={Shark} alt={'fishing'} />
            <Image src={Mountain} alt={'mountain'} />
            <Image src={Scuba} alt={'scuba'} />
            <Image src={Biking} alt={'Biking'} />
            <Image src={Kayak} alt={'Kayak'} />
          </Row>
          <br />
          <Title>Contact Me</Title>
          <Para>
            I am always available to connect professionally.
          </Para>
          <Card>
            <Cell>
              <IconResize src={Mobile} alt={'mobile'} />
              <MiniText>610.780.4554</MiniText>
            </Cell>
          </Card>
          <Card>
            <Cell>
              <IconResize src={Email} alt={'email'} />
              <MiniText>michael.shermot[at]gmail.com</MiniText>
            </Cell>
          </Card>
        </Col>

      </Container>
    </Screen>
  );
}

export default App;
