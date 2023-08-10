const ownerId = "nearcon23.near";
const apiKey =
  "patWQQ6FY8H5O8wTY.4b08b48ac31aa13eb9fea974cfa60e103ae7297c010d4fe752e1abb37bd24c9d";

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 3.125rem;
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

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

State.init({
  sponsors: [],
  sponsorsIsFetched: false,
});

if (!state.sponsorsIsFetched) {
  asyncFetch(
    "https://api.airtable.com/v0/appcR9zt96Wv7VXWl/tbl7lCj23rJIOSPA9?fields%5B%5D=Image",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  ).then(({ body }) => {
    State.update({
      sponsors: body.records.map((record) => record.fields.Image[0].url),
      sponsorsIsFetched: true,
    });
  });

  return <>Loading...</>;
}

return (
  <Section>
    <div>
      <h2>Last year’s Sponsors</h2>
      <Widget
        src={`${ownerId}/widget/Home.BlackButton`}
        props={{
          text: "Become a 2023 Sponsor/Partner",
          href: "http://bit.ly/sponsor-nearcon",
        }}
      />
    </div>
    <Logos>
      {state.sponsors.map((src) => (
        <img src={src} />
      ))}
    </Logos>
  </Section>
);
