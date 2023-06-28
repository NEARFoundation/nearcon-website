const ownerId = "nearcon23.near";

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 3.125rem 3.125rem 5rem 3.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    & > h2 {
      display: flex;
      flex-direction: column;
      color: var(--black, #000);
      font-size: 2rem;
      font-family: FK Grotesk;
      font-weight: 500;
    }
  }
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  row-gap: 3rem;
  column-gap: auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const brave = "bafkreiezfk3sxsnr3vzzttmrfoejj2tjrin5patomf6kttagn4y6i4dqne";
const mapImage = (src) => `https://ipfs.near.social/ipfs/${src}`;

return (
  <Section>
    <div>
      <h2>Last year’s Sponsors</h2>
      <Widget
        src={`${ownerId}/widget/Home.BlackButton`}
        props={{ text: "Become a 2023 Sponsor/Partner" }}
      />
    </div>
    <Logos>
      {[...Array(15).keys()].map(() => (
        <img src={mapImage(brave)} />
      ))}
    </Logos>
  </Section>
);
