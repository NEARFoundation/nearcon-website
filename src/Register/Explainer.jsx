const ownerId = "nearcon23.near";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  .red {
    color: #ff7966;
  }

  h2 {
    font-family: "FK Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    line-height: 1.5em;
    color: #000000;
  }

  ul {
    color: var(--black, #000);
    font-size: 1rem;
    font-family: Mona Sans;
    font-weight: 600;
    line-height: 170%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5em;
    list-style-position: outside;
    padding-left: 1.25em;
  }

  ol {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 170%;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5em;
    list-style-position: outside;
    padding-left: 1.25em;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2em;
    gap: 1em;
    background: #f3f3f2;
    border-radius: 8px;

    & > span {
      font-family: "Mona Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 1em;
      line-height: 150%;
      color: #a1a09a;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 2em;
      width: 100%;
    }
  }
`;

const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Container>
    <h2>What you get</h2>
    <ul>
      <li>3 days of access to both Nearcon HQ and Hacker HQ venues</li>
      <li>
        200+ content sessions spanning Technical updates, AI, Gaming, Loyalty,
        Regulation and much more
      </li>
      <li>Entry to Nearcon opening and closing parties</li>
      <li>Exclusive swag, merchandise, and airdrops</li>
      <li>Networking with founders, builders, and VCs</li>
      <li>Some other surprises in store!</li>
    </ul>
    <h2>How it works</h2>
    <ol>
      <li>
        Complete the form <span className="red">(All fields required)</span>
      </li>
      <li>
        You will be redirected to complete payment (via crypto or fiat currency)
      </li>
      <li>
        You will receive a receipt of purchase and your ticket will be sent to
        you later leading up to the event (because we’re working on some special
        onboarding experiences)
      </li>
    </ol>
    <div>
      <span>Ticketing solutions by</span>
      <div>
        <a
          href="https://veriken.com/"
          target="_blank"
          referrerPolicy="unsafe-url"
        >
          <Widget src={`${ownerId}/widget/Register.VerikenLogo`} />
        </a>
        <a
          href="https://keypom.xyz/"
          target="_blank"
          referrerPolicy="unsafe-url"
        >
          <Widget src={`${ownerId}/widget/Register.KeypomLogo`} />
        </a>
        <a
          href="https://www.mintbase.xyz/"
          target="_blank"
          referrerPolicy="unsafe-url"
        >
          <Widget src={`${ownerId}/widget/Register.MintbaseLogo`} />
        </a>
      </div>
    </div>
  </Container>
);
