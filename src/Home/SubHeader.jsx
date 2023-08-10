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
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 1.625em;
    line-height: 1.5em;
    color: #000000;
  }

  p {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1.25em;
    color: #000000;
  }

  ul {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25em;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-position: outside;
    padding-left: 1em;
    gap: 0.5em;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3em;
  margin-top: 2em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1em;
    width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

return (
  <Container>
    <Text>
      <h2>The biggest experience of the year is near</h2>

      <p>
        Last year’s NEARCON was epic. This one will be iconic. We are going to
        take you on a 4 day journey into an open web.
      </p>
      <ul>
        <li>
          Join 5,000+ delegates as we explore the power and possibilities of an
          open web
        </li>
        <li>
          Get inspired by talks from renowned authors, economists, artists,
          politicians, developers, entrepreneurs, and more
        </li>
        <li>
          Explore the Blockchain Operating System (BOS), try it for yourself,
          and find out why it's the driving force behind an open web
        </li>
        <li>
          Connect with projects, speakers, community members, builders, and
          multi-chain enthusiasts from around the world
        </li>
        <li>
          Hack the days and nights away for a chance to build on the BOS and win
          $180k+
        </li>
      </ul>
      <ButtonContainer>
        <Widget src={`${ownerId}/widget/Register.Button`} />
        <Widget src={`${ownerId}/widget/Home.SpeakerButton`} />
      </ButtonContainer>
    </Text>
    <Visual>
      <img
        src="https://nearcon.s3.amazonaws.com/illia.png"
        alt="NEARCON Day 3 Layer 1 Stage Evolving NEAR Ecosystem Governence"
      />
    </Visual>
  </Container>
);
