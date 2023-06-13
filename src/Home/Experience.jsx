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
      <h2>At Nearcon, you’ll experience</h2>
      <div>
        <p>Lasting Connections</p>
        <span>
          Networking opportunities to connect and build lasting relationships
          with the NEAR Community and Ecosystem.
        </span>
      </div>

      <div>
        <p>Range of Discussions</p>
        <span>
          Talks on Future of Finance, NFTs, Governance, Sustainability, Gaming,
          Protocol Updates, Developer Tools, and more.
        </span>
      </div>

      <div>
        <p>IRL Hackathon</p>
        <span>
          Hackers get in free :) Win prizes, get onstage for a live “Dragon’s
          Den” with crypto titans, and most importantly… have fun building!
        </span>
      </div>

      <span>
        Join the Official NEARCON Telegram channel and connect with other
        Ecosystem members before the event.
      </span>
      <Widget src={`${ownerId}/widget/Register.Button`} />
    </Text>
  </Container>
);
