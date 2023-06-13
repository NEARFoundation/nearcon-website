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

  ul {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
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

const visual = "bafkreigmckcks34rdm4qfyzpnctjb5tz3pt66itrorprld3vm7azoxsgdi";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <Text>
      <h2>Dreamers. Builders. Friends.</h2>
      <p>
        Building on the success of last year, NEAR’s flagship event is back. And
        this year it’s set to be bigger and better than ever.
      </p>
      <ul>
        <li>
          Join 2000+ delegates as we explore the limitless possibilities of
          building a better world with NEAR.
        </li>
        <li>
          Get up to speed on the NEAR ecosystem and the latest Web3 developments
          and technologies.
        </li>
        <li>
          Get inspired with talks from renowned authors, economists, A-list
          artists, and politicians.
        </li>
        <li>
          Get together and network with builders, collaborators, and makers
          across a variety of industries.
        </li>
      </ul>
      <span>
        Then get ready to groove the night away with our resident DJ. And if
        you’re a hacker accepted for the hackathon, you’ll get a free conference
        pass. Let’s build beyond the hype at NEARCON.
      </span>
      <Widget src={`${ownerId}/widget/Register.Button`} />
    </Text>
    <Visual>
      <img
        src={mapImage(visual)}
        alt="NEARCON Day 3 Layer 1 Stage Evolving NEAR Ecosystem Governence"
      />
    </Visual>
  </Container>
);
