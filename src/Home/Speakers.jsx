const ownerId = "nearcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #00ec97;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    line-height: 1.4em;
    color: #000000;
  }
`;

const Speakers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;

  a {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 768px) {
    a {
      width: 48%;
    }
  }

  @media (min-width: 1024px) {
    a {
      width: 24%;
    }
  }
`;

const placeholder =
  "bafkreietk36kek3bls24eaiiesfyu7ulrwh6d6wubijkwwnkaouxhqq7ze";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <Title>
      <h2>Featured Speakers</h2>
      <Widget
        src={`${ownerId}/widget/Home.BlackButton`}
        props={{ text: "View All Speakers" }}
      />
    </Title>
    <Speakers>
      <Widget
        src={`${ownerId}/widget/Home.SpeakerCard`}
        props={{
          image: mapImage(placeholder),
          name: "Illia Polosukhin",
          org: "Near Protocol",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.SpeakerCard`}
        props={{
          image: mapImage(placeholder),
          name: "Illia Polosukhin",
          org: "Near Protocol",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.SpeakerCard`}
        props={{
          image: mapImage(placeholder),
          name: "Illia Polosukhin",
          org: "Near Protocol",
        }}
      />
      <Widget
        src={`${ownerId}/widget/Home.SpeakerCard`}
        props={{
          image: mapImage(placeholder),
          name: "Illia Polosukhin",
          org: "Near Protocol",
        }}
      />
    </Speakers>
  </Container>
);
