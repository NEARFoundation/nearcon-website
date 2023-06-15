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
    font-size: 1.625em;
    line-height: 1.5em;
    color: #fff;
  }

  p {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    leading-trim: both;
    text-edge: cap;
    color: #00ec97;
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const visual = "bafkreiaqboqcc33v2ce422dtoa3iepmwalckl7u62n7einhfuobx6il4cy";
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
      <h2>What to expect on your way</h2>
      <div>
        <p>Powerful insights</p>
        <span>
          NEAR is constantly pushing boundaries, so are our speakers. Hear from
          leading voices about the BOS, AI, the future of Web3, why an open web
          matters, user-experience, governance, sustainability, NFTs, DeFI,
          gaming, and much more.
        </span>
      </div>

      <div>
        <p>Deep connections</p>
        <span>
          The NEAR community is one of a kind. Over the course of the event,
          there will be chances to network and collaborate, exciting
          conversations about all things NEAR, opportunities to learn from one
          another, and plenty of time to celebrate together.
        </span>
      </div>

      <div>
        <p>Dynamic hackathon</p>
        <span>
          We have the best devs in the world (if we do say so ourselves). Build
          directly on the BOS and experience all of its capabilities, while
          getting a chance to win prizes and get your project featured onstage.
          And, hackers get into the event for Free! Apply here.
        </span>
      </div>

      <div>
        <p> One-of-a-kind experience </p>
        <span>
          NEAR isn’t just another blockchain, so NEARCON isn’t just another
          conference. NEARCON was created to be a community driven event that
          brings people together over their shared passion for NEAR, and a
          shared vision of a more free, fair, and open web.
        </span>
      </div>
      <Widget src={`${ownerId}/widget/Register.Button`} />
    </Text>
  </Container>
);
