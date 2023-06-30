const ownerId = "nearcon23.near";
const apiKey =
  "patWQQ6FY8H5O8wTY.4b08b48ac31aa13eb9fea974cfa60e103ae7297c010d4fe752e1abb37bd24c9d";

const Container = styled.div`
  display: flex;
  padding: 3.125rem 3.25rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  & > div {
    width: 25%;
  }

  @media screen and (max-width: 768px) {
    & > div {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    & > div {
      width: 50%;
    }
  }
`;

State.init({
  speakers: [],
  speakersIsFetched: false,
});

if (!state.speakersIsFetched) {
  asyncFetch(
    "https://api.airtable.com/v0/appcR9zt96Wv7VXWl/tbl8IoEJuAorcE7qQ?fields%5B%5D=Name&fields%5B%5D=Headshot",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  ).then(({ body }) => {
    State.update({
      speakers: body.records.map((record) => {
        const [name, org] = record.fields.Name.split(" - ");
        return {
          name,
          org,
          image: record.fields.Headshot[0].url,
        };
      }),
      speakersIsFetched: true,
    });
  });

  return <>Loading...</>;
}

return (
  <Container>
    {state.speakers.map(({ name, org, image }) => (
      <div key={name}>
        <Widget
          src={`${ownerId}/widget/Speakers.SpeakerCard`}
          props={{ name, org, image }}
        />
      </div>
    ))}
  </Container>
);
