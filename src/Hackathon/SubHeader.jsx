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
    color: #000000;
  }

  p {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1.25em;
    color: #000000;
  }

  span {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 1.25em;
    color: #000000;
  }
`;

const Visual = styled.div`
  width: 55%;
  border-radius: 20px;

  img {
    width: 100%;
  }
`;

const visual = "bafkreidf777636npp5tnkig5o6fuugnpbi7t6papqjgcudodadywxn7vpy";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <Text>
      <h2>Building a multi-chain, open web future.</h2>
      <p>
        NEAR is inviting hackers to join us during NEARCON this year, Sep 11-14,
        in Lisbon, for an intensive 48 hour IRL hackathon. Win prizes, get
        onstage for a live “Dragon’s Den” with crypto titans, and most
        importantly… have fun building!
      </p>
      <span>
        Teams of size 1-5 from all backgrounds are welcome to apply. As space is
        limited, priority will be given to early applicants with clear
        credentials, strong intentions to attend in person, and produce a great
        Web3 hack! Let’s build!
      </span>
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
