const ownerId = "nearcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #000;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  gap: 1em;
  padding: 0;

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 1.625em;
    line-height: 1.5em;
    color: #fff;
  }

  p {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1.25em;
    color: #fff;
  }

  ul {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 1.25em;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-position: outside;
    padding-left: 1em;
    gap: 0.5em;
  }

  span {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 1.25em;
    color: #fff;
  }
`;

const Visual = styled.div`
  width: 55%;
  border-radius: 20px;

  img {
    width: 100%;
  }
`;

const visual = "bafkreibhnkloh7lo7rsastrwdjsnibh7p6mjyjqazmiyny257wmx5sdsli";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <Visual>
      <img
        src={mapImage(visual)}
        alt="NEARCON Day 3 Layer 1 Stage Evolving NEAR Ecosystem Governence"
      />
    </Visual>
    <Text>
      <h2>If accepted to hack, you will receive:</h2>
      <ul>
        <li>FREE access to NEARCON</li>
        <li>24/7 access to hack at the venue</li>
        <li>Hands on mentoring</li>
        <li>Participation stipend in NEAR</li>
        <li>Chances to win amazing prizes!</li>
      </ul>

      <span>
        You must complete the application form to be considered to hack and for
        a free NEARCON pass.
      </span>
      <Widget src={`${ownerId}/widget/Hackathon.Button`} />
    </Text>
  </Container>
);
