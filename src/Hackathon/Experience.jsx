const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 3.5em 3.5em 4.5em;
  gap: 3em;
  background: #000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  gap: 1em;
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
    color: #ffffff;
  }

  ul {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-position: outside;
    padding-left: 1em;
    gap: 0.5em;
  }

  span {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    color: #ffffff;
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

const visual = "bafkreia5u5fz6nbxmdkqg7xgvg5hc4sfnkbero2dosrnlf5rav5aqfyar4";
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
