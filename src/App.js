import { Screen, Container, Banner, Avatar, Row, Icon, Card, Para, Title, Col, Cell, Anchor, LogoMini, MiniText, IconResize, Image } from "./components/lib";

import Headshot from './assets/me/headshot.png';
import Shark from './assets/me/shark.png';
import Kayak from './assets/me/kayak.png';
import Biking from './assets/me/biking.png';
import Mountain from './assets/me/mountain.png';
import Scuba from './assets/me/scuba.png';

import LinkedIn from './assets/icon/linkedin.png';
import GitHub from './assets/icon/github.png';
import Medium from './assets/icon/medium.png';

import SYBRLIGHT from './assets/icon/sybrlight.png';

import Email from './assets/icon/email.png';
import Mobile from './assets/icon/mobile.png';

function App() {
  return (
    <Screen>
      {/* Top banner with logo + links */}
      <Banner>
        <Anchor href="https://sybr.org" target="_blank">
          <Icon src={SYBRLIGHT} alt="SYBR" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/themikeysherm/" target="_blank">
          <Icon src={LinkedIn} alt="LinkedIn" />
        </Anchor>
        <Anchor href="https://github.com/TheMikeySherm" target="_blank">
          <Icon src={GitHub} alt="GitHub" />
        </Anchor>
        <Anchor href="https://medium.com/@mikeysherm" target="_blank">
          <Icon src={Medium} alt="Medium" />
        </Anchor>
      </Banner>

      {/* Header / Summary */}
      <Container>
        <Row>
          <Col>
            <Avatar src={Headshot} alt="Michael Shermot" />
          </Col>
          <Col>
            <Title>Michael Shermot</Title>
            <Para>
              Founder &amp; CEO, SYBR LLC &nbsp;•&nbsp; Former CIO, Mail Management Services (MMS) &nbsp;•&nbsp; Naval Engineer &nbsp;•&nbsp; Software Architect
            </Para>
            <Para>
              Entrepreneur, engineer, and software architect with experience building logistics platforms,
              USPS-ready integrations, and cloud systems. Founder of SYBR LLC with a background in Coast
              Guard operations, transportation supervision, and global technology projects. I enjoy traveling
              to new places with my wife, starting our family, spending time outdoors and fishing, and I
              believe that hard work becomes talent.
            </Para>
          </Col>
        </Row>
      </Container>

      {/* Professional Experience */}
      <Container>
        <Col>
          <Title>Professional Experience</Title>

          <Para>
            <b>Founder &amp; CEO — SYBR, LLC</b> &nbsp;|&nbsp; 2018–Present &nbsp;|&nbsp; Hanover, PA
          </Para>
          <Para>
            Founded and built SYBR into a production Transportation Management System (TMS) used for
            USPS-ready operations, logistics automation, and high-volume dispatching.
          </Para>
          <Para>
            Architected a multi-tenant logistics platform using modern cloud technologies and containerized microservices.
            Designed SYBR around X12 EDI standards (204, 214, 990) as the backbone for logistics events,
            documentation, structures, validation, and workflows.
          </Para>
          <Para>
            Built secure AS2, SFTP, and REST integrations for enterprise trading partners and implemented
            real-time dispatching, load tendering, contract performance analytics, USPS readiness tools,
            scheduling engines, and error-recovery automation.
          </Para>
          <Para>
            Managed the full engineering lifecycle: coding, architecture, DevOps, CI/CD, GitHub governance,
            DockerHub deployments, and cloud operations. Provided USPS integration testing support to MMS
            from May–December 2023; MMS became a paying customer on December 7, 2023, upon receipt of its
            first USPS load tender.
          </Para>
          <Para>
            Maintains full ownership and independent operation of SYBR; SYBR LLC is its own legal entity with
            an EIN and is not a DBA or subsidiary of MMS or SMS.
          </Para>

          <Para>
            <b>Consulting (through SYBR)</b>
          </Para>
          <Para>
            <b>Orion Project — Ukraine (2023).</b> Developed a mobile application enabling anonymous civilian
            reporting of Russian troop movements; worked with U.S. and Ukrainian contacts, SeaWatch personnel,
            and defense contractors. Transitioned the project in March 2023.
          </Para>
          <Para>
            <b>Sea Watch Labs — South China Sea (2022).</b> Built mobile technology enabling fishermen to
            record and report illegal Chinese fishing activity using photos and geolocation data.
          </Para>
          <Para>
            <MiniText>
              Technologies: Node.js, MongoDB, Docker, AWS, TypeScript, AS2, EDI, XML, React, RabbitMQ, Python, GCP
            </MiniText>
          </Para>

          <Para>
            <b>Chief Information Officer (CIO) — Mail Management Services (MMS)</b> &nbsp;|&nbsp; 2023–2024 &nbsp;|&nbsp; Remote
          </Para>
          <Para>
            Led MMS modernization and technical readiness for USPS integrations. Directed IT roadmap, modernization
            initiatives, and security posture while evaluating TMS platforms (including RoseRocket) for USPS
            compatibility and scalability.
          </Para>
          <Para>
            Managed USPS certification readiness, integration testing, data validation, and workflow documentation.
            Built internal automation systems for emails and forms using off-the-shelf tools, and improved fleet
            data workflows, cybersecurity practices, and operational analytics.
          </Para>
          <Para>
            <MiniText>
              Note: MMS’s adoption of SYBR was based on evaluation; MMS is a SYBR customer, not an owner.
            </MiniText>
          </Para>

          <Para>
            <b>Supervisor — Southern Mail Service (SMS)</b> &nbsp;|&nbsp; 2017–2022 &nbsp;|&nbsp; Hanover, PA &amp; TX/PA Sites
          </Para>
          <Para>
            Worked across operations, payroll systems, safety, and compliance in a high-demand, on-call environment.
            Reported directly to JimBob Elliott, Ted Mills, and Lance &amp; Tish Farrell.
          </Para>
          <Para>
            Built internal tools and reporting systems; supported driver qualification, payroll accuracy,
            contract analysis, and gained experience with USPS business operations and transportation workflows.
          </Para>
        </Col>
      </Container>

      {/* Education */}
      <Container>
        <Col>
          <Title>Education</Title>
          <Para>
            <b>B.S. Computer Science &amp; Software Engineering</b> — Magna Cum Laude (3.8 GPA), 2020–2022
          </Para>
          <Para>
            <b>United States Coast Guard Academy — Naval Architecture &amp; Marine Engineering</b>, 2012–2016
            &nbsp; (coursework completed; program not completed).
          </Para>
        </Col>
      </Container>

      {/* Coast Guard Operations */}
      <Container>
        <Col>
          <Title>Coast Guard Operations</Title>
          <Para>
            <b>USCGC Reef Shark (2015).</b> Fully Qualified Crew Member; Engineering Watchstander; Damage Control; supported
            search-and-rescue and law-enforcement missions.
          </Para>
          <Para>
            <b>U.S. Coast Guard Yard (2016).</b> Shipyard Competent Person; Boat Crew Member; conducted confined-space and
            safety inspections for vessel repair operations; participated in Small Boat Crew Operations.
          </Para>
        </Col>
      </Container>

      {/* Awards & Leadership */}
      <Container>
        <Col>
          <Title>Awards &amp; Leadership</Title>

          <Para>
            <b>Academic.</b> Magna Cum Laude — B.S. Computer Science &amp; Software Engineering; SNAME Undergraduate Paper of
            the Year — National Recipient; Vice President — USCGA SNAME Chapter.
          </Para>
          <Para>
            <b>Athletic.</b> NCAA National Qualifier — Wrestling (174 lbs); President — Student–Athlete Advisory Committee
            (SAAC); USCGA Physical Fitness Awards.
          </Para>
          <Para>
            <b>Military.</b> National Defense Service Medal; Marksmanship Medals (Rifle &amp; Pistol); Command &amp; Community
            Appreciation Awards; USCGA Chiefs Award.
          </Para>
        </Col>
      </Container>

      {/* Technical Skills */}
      <Container>
        <Col>
          <Title>Technical Skills</Title>
          <Para>
            <b>Software:</b> Node.js, Python, TypeScript, React, Express, MongoDB.
          </Para>
          <Para>
            <b>Infrastructure:</b> AWS, Docker, Kubernetes, CI/CD, Linux.
          </Para>
          <Para>
            <b>Logistics / EDI:</b> X12 (204/214/990), AS2, SFTP, USPS workflows.
          </Para>
          <Para>
            <b>Engineering Tools:</b> Rhino, GHS, AutoCAD, MATLAB, Excel.
          </Para>
          <Para>
            <b>R&amp;D / Tools:</b> ChatGPT, Claude, Gemini, VS Code, NGINX, Vite, NextJS, Jest, GCP.
          </Para>
          <Para>
            <b>Leadership:</b> Startups, technology strategy, architecture, development, operations, analytics.
          </Para>
        </Col>
      </Container>

      {/* Life Outside Work */}
      <Container>
        <Col>
          <Title>Life Outside Work</Title>
          <Para>
            I enjoy traveling to new places with my wife, spending time outdoors, fishing, and exploring new
            experiences together.
          </Para>
          <Row>
            <Image src={Shark} alt="Fishing" />
            <Image src={Mountain} alt="Mountain" />
            <Image src={Scuba} alt="Scuba" />
            <Image src={Biking} alt="Biking" />
            <Image src={Kayak} alt="Kayak" />
          </Row>
        </Col>
      </Container>

      {/* Contact */}
      <Container>
        <Col>
          <Title>Contact</Title>
          <Para>I am always available to connect professionally.</Para>
          <Card>
            <Cell>
              <IconResize src={Mobile} alt="mobile" />
              <MiniText>610.780.4554</MiniText>
            </Cell>
          </Card>
          <Card>
            <Cell>
              <IconResize src={Email} alt="email" />
              <MiniText>michael.shermot[at]gmail.com</MiniText>
            </Cell>
          </Card>
        </Col>
      </Container>
    </Screen>
  );
}

export default App;
