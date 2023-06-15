const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  gap: 2em;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    color: #000000;
  }

  p {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    color: #000000;
  }
`;

const Visual = styled.div`
  width: 55%;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const visual = "bafkreigb3ogykrekiamghhts5dwf2sq25xdzdvsinvvtjitzmxxccp7csq";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <Text>
      <h2>Building a multi-chain, open web future.</h2>
      <p>
        The NEARCON hackathon is a 48-hour IRL hacking session for those who
        want to team up, get familiar with NEAR, build a prototype for their
        project, pitch it, and get a chance to win.
      </p>
      <p>
        The hackathon can be the start of something amazing, or a way to fail
        fast, learn, and adapt. We appreciate both, because we know that to
        build the next big thing you often have to fail enough times to find
        just the right idea.
      </p>
      <Widget src={`${ownerId}/widget/Hackathon.Button`} />
    </Text>
    <Visual>
      <img
        src={mapImage(visual)}
        alt="NEARCON Day 3 Layer 1 Stage Evolving NEAR Ecosystem Governence"
      />
    </Visual>
  </Container>
);
