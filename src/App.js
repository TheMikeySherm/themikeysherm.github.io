import { Screen, Container, Banner, Avatar, Row, Icon, Card, Para, Title, Col, Cell, Anchor, Logo, LogoMini, MiniText, IconResize, Image } from "./components/lib";
import Headshot from './assets/me/headshot.png';
import Shark from './assets/me/shark.png';
import Kayak from './assets/me/kayak.png';
import Biking from './assets/me/biking.png';
import Mountain from './assets/me/mountain.png';
import Scuba from './assets/me/scuba.png';
import LinkedIn from './assets/icon/linkedin.png'
import GitHub from './assets/icon/github.png'
import Medium from './assets/icon/medium.png'
import MailManagement from './assets/icon/mms.png'
import SouthernMail from './assets/icon/sms.png'
import SeaWatch from './assets/icon/seawatch.png'
import Orion from './assets/icon/orion.png'
import GFM from './assets/icon/gfm.png'
import SNHU from './assets/icon/snhu.png'
import USCGA from './assets/icon/uscga.png'
import YardBros from './assets/icon/yardbros.png'
import SeaWeeds from './assets/icon/seaweeds.png'
import SYBR from './assets/icon/sybr.png'
import SYBRLIGHT from './assets/icon/sybrlight.png'
import MONGO from './assets/icon/mongodb.png'
import AZURE from './assets/icon/azure.png'
import JEST from './assets/icon/jest.png'

import Email from './assets/icon/email.png'
import Mobile from './assets/icon/mobile.png'


import APPLE from './assets/tech/apple.png'
import LINUX from './assets/tech/linux.png'
import WINDOWS from './assets/tech/windows.png'
import ANDROID from './assets/tech/android.png'

import AWS from './assets/tech/aws.png'
import GOOGLECLOUD from './assets/tech/googlecloud.png'
import CLOUDFLARE from './assets/tech/cloudflare.png'
import AUTH0 from './assets/tech/auth0.png'
import BUDDYWORKS from './assets/tech/buddyworks.png'
import GIT from './assets/tech/git.png'
import GITHUB from './assets/tech/github.png'
import BITBUCKET from './assets/tech/bitbucket.png'

import NODE from './assets/tech/node.png'
import REACT from './assets/tech/react.png'
import JS from './assets/tech/js.png'

import HTML from './assets/tech/html.png'
import CSS from './assets/tech/css.png'
import PHP from './assets/tech/php.png'
import PYTHON from './assets/tech/python.png'
import MYSQL from './assets/tech/mysql.png'
import MSSQL from './assets/tech/mssql.png'
import GRAPHQL from './assets/tech/graphql.png'

import WORDPRESS from './assets/tech/wordpress.png'

function App() {
  return (
    <Screen>
      <Banner>
        <Anchor href="https://sybr.org" target="_blank">
          <Icon src={SYBRLIGHT} alt={'sybrlight'} />
        </Anchor>
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
            I am a Computer Scientist (CS) passionate about using my skills to provide innovative solutions.
            I seek out opportunities and challenge myself to push beyond the realm of possible. 
          </Para>
          <Para>
            <i>As iron sharpens iron, so one person sharpens another.</i>
            <MiniText>Proverbs 27:17</MiniText>
          </Para>
          <Para>
            I surround myself with professional coaches, mentors, and forward-thinking leaders.
            I seek, embrace, and reflect on feedback to improve daily. Emotional intelligence helps me become a better person
            as I am in a continuous cycle of betterment.
          </Para>
          <Para>
            <i>Attitude is a choice.</i>
            <MiniText>Unknown</MiniText>
          </Para>
          <Para>
            Positive attitudes are infectious and I know that teams accomplish more by building each other up.
            I aim to positively influence and support others to create synergy.
          </Para>
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Experience</Title>
          <Para>
            At <Anchor href="https://mailmanagementservices.com/" target="_blank">Mail Management Services (MMS)</Anchor>
            I am the Chief Information Officer. At a high level,
            I am responsible for managing and implementing computer and information technology.
            These systems automate processes and increase operational accuracy and performance.
          </Para>
          <Para>
            At <Anchor href="https://southernmail.com/" target="_blank">Southern Mail (SMS)</Anchor>, I planned, designed, built, and integrated new software;
            saving time and money, while also providing greater visibility of day-to-day operations.
            I rebuilt, re-platformed, and migrated legacy applications to modern languages and
            facilitated integrations between SMS and the United States Postal Service.
          </Para>
          <Para>
            As a <Anchor href="https://sybr.org/" target="_blank">Freelance CS</Anchor>, I enjoy helping others turn ideas into reality, while also researching and developing future technologies.
            My experience encompasses complex applications- <Anchor href="https://seawatch.io/" target="_blank">Sea Watch</Anchor> and <Anchor href="https://www.orion-app.com/" target="_blank">Orion</Anchor>,
            to online shops- <Anchor href="https://seaweedsbythesea.com/" target="_blank">Sea Weeds</Anchor>,
            and simple landing pages- <Anchor href="https://yardbrosmd.com/" target="_blank">YardBros</Anchor>.
          </Para>
          <Para>
            As a volunteer, I contributed 350+ hours to Sea Watch and Orion. Both Sea Watch and Orion are applications designed for humanitarian missions.
            Sea Watch tracks illegal, unreported, and unregulated fishing in the South China Sea.
            Orion focuses on helping people identify and avoid hazards presented by Russian troops in Ukraine.
          </Para>
          <Row>
            <Logo src={MailManagement} alt={'mail management services'} />
            <Logo src={SouthernMail} alt={'southern mail'} />
            <Logo src={GFM} alt={'go freight masters'} />
            <Logo src={SeaWatch} alt={'sea watch'} />
            <Logo src={YardBros} alt={'yardbros'} />
            <Logo src={SeaWeeds} alt={'seaweeds'} />
            <Logo src={SYBR} alt={'sybr'} />
          </Row>
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Tools</Title>
          <Row>
            <Anchor href={'https://developer.apple.com/'} target={'_blank'}><LogoMini src={APPLE} alt={'apple'} /></Anchor>
            <Anchor href={'https://www.linux.org/'} target={'_blank'}><LogoMini src={LINUX} alt={'linux'} /></Anchor>
            <Anchor href={'https://www.microsoft.com/'} target={'_blank'}><LogoMini src={WINDOWS} alt={'windows'} /></Anchor>
            <Anchor href={'https://developer.android.com/'} target={'_blank'}><LogoMini src={ANDROID} alt={'android'} /></Anchor>
            <Anchor href={'https://aws.amazon.com/'} target={'_blank'}><LogoMini src={AWS} alt={'aws'} /></Anchor>
            <Anchor href={'https://azure.microsoft.com/'} target={'_blank'}><LogoMini src={AZURE} alt={'azure'} /></Anchor>
            <Anchor href={'https://cloud.google.com/'} target={'_blank'}><LogoMini src={GOOGLECLOUD} alt={'google cloud'} /></Anchor>
            <Anchor href={'https://www.cloudflare.com/'} target={'_blank'}><LogoMini src={CLOUDFLARE} alt={'cloudflare'} /></Anchor>
            <Anchor href={'https://auth0.com/'} target={'_blank'}><LogoMini src={AUTH0} alt={'auth0'} /></Anchor>
            <Anchor href={'https://buddy.works/'} target={'_blank'}><LogoMini src={BUDDYWORKS} alt={'buddy.works'} /></Anchor>
            <Anchor href={'https://git-scm.com/'} target={'_blank'}><LogoMini src={GIT} alt={'git'} /></Anchor>
            <Anchor href={'https://github.com/'} target={'_blank'}><LogoMini src={GITHUB} alt={'github'} /></Anchor>
            <Anchor href={'https://bitbucket.org/dashboard/overview'} target={'_blank'}><LogoMini src={BITBUCKET} alt={'bitbucket'} /></Anchor>
            <Anchor href={'https://nodejs.org/'} target={'_blank'}><LogoMini src={NODE} alt={'nodejs'} /></Anchor>
            <Anchor href={'https://reactjs.org/'} target={'_blank'}><LogoMini src={REACT} alt={'reactjs'} /></Anchor>
            <Anchor href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} target={'_blank'}><LogoMini src={JS} alt={'java script'} /></Anchor>
            <Anchor href={'https://developer.mozilla.org/en-US/docs/Web/HTML'} target={'_blank'}><LogoMini src={HTML} alt={'html'} /></Anchor>
            <Anchor href={'https://developer.mozilla.org/en-US/docs/Web/css'} target={'_blank'}><LogoMini src={CSS} alt={'css'} /></Anchor>
            <Anchor href={'https://www.php.net/'} target={'_blank'}><LogoMini src={PHP} alt={'php'} /></Anchor>
            <Anchor href={'https://www.python.org/'} target={'_blank'}><LogoMini src={PYTHON} alt={'python'} /></Anchor>
            <Anchor href={'https://www.microsoft.com/en-us/sql-server/sql-server-2019'} target={'_blank'}><LogoMini src={MSSQL} alt={'microsoft sql'} /></Anchor>
            <Anchor href={'https://jestjs.io/'} target={'_blank'}><LogoMini src={JEST} alt={'jest'} /></Anchor>
            <Anchor href={'https://mysql.com'} target={'_blank'}><LogoMini src={MYSQL} alt={'mysql'} /></Anchor>
            <Anchor href={'https://www.mongodb.com/'} target={'_blank'}><LogoMini src={MONGO} alt={'mongo'} /></Anchor>
            <Anchor href={'https://graphql.org/'} target={'_blank'}><LogoMini src={GRAPHQL} alt={'graphql'} /></Anchor>
            <Anchor href={'https://wordpress.com/'} target={'_blank'}><LogoMini src={WORDPRESS} alt={'wordpress'} /></Anchor>
          </Row>
        </Col>
      </Container>
      <Container>
        <Col>
          <Title>Education</Title>
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
            When I am taking a break from my work, I am fishing and exploring with my wife.
          </Para>
          <Row>
            <Image src={Shark} alt={'fishing'} />
            <Image src={Mountain} alt={'mountain'} />
            <Image src={Scuba} alt={'scuba'} />
            <Image src={Biking} alt={'Biking'} />
            <Image src={Kayak} alt={'Kayak'} />
          </Row>
        </Col>
      </Container>
      <Container>
        <Col>
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
