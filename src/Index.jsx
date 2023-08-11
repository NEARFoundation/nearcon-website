const ownerId = "nearcon23.near";
const availableTabs = [
  "home",
  "register",
  "hackathon",
  "speakers",
  "terms",
  "ticket",
];

const getTab = (tab) => {
  if (!tab || !availableTabs.includes(tab)) {
    return "home";
  }

  return tab;
};

const showSidebar = ![].includes(props.tab);
const isForm = [].includes(props.tab);

const update = (state) => State.update(state);

const tabContentWidget = {
  home: "Home.Page",
  register: "Register.Page",
  hackathon: "Hackathon.Page",
  speakers: "Speakers.Page",
  terms: "Terms.Page",
  ticket: "Ticket.Page",
}[props.tab];

const tabContent = (
  <Widget
    src={`${ownerId}/widget/${tabContentWidget}`}
    props={{ update, props }}
  />
);

const ContentContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #eceef0;
  border-radius: 24px;
  padding: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &.form {
    border: none;
    background: #fafafa;
  }

  * {
    margin: 0;
  }
`;

const Sidebar = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    & > div {
      &:last-child {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    & > div {
      &:first-child {
        display: none;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div``;

return (
  <Container>
    <Widget src={`${ownerId}/widget/Navbar`} props={{ update }} />
    <Content>
      <Sidebar show={showSidebar}>
        <Widget
          src={`${ownerId}/widget/Sidebar`}
          props={{ tab: props.tab, update, collapsible: true }}
        />
        <Widget
          src={`${ownerId}/widget/Sidebar`}
          props={{ tab: props.tab, update, collapsible: false }}
        />
      </Sidebar>
      <ContentContainer className={isForm ? "form" : ""}>
        {tabContent}
        <Widget src={`${ownerId}/widget/Footer`} />
      </ContentContainer>
    </Content>
  </Container>
);
