const ownerId = "nearcon23.near";
const availableTabs = ["home", "register", "hackathon"];

const getTab = (tab) => {
  if (!tab || !availableTabs.includes(tab)) {
    return "home";
  }

  return tab;
};

State.init({
  tab: getTab(props.tab),
});

const showSidebar = ![].includes(state.tab);
const isForm = [].includes(state.tab);

const update = (state) => State.update(state);

const tabContent = {
  home: <Widget src={`${ownerId}/widget/Home.Page`} props={{ update }} />,
  register: (
    <Widget src={`${ownerId}/widget/Register.Page`} props={{ update }} />
  ),
  hackathon: (
    <Widget src={`${ownerId}/widget/Hackathon.Page`} props={{ update }} />
  ),
}[state.tab];

const ContentContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #eceef0;
  border-radius: 24px 24px 0px 0px;
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
          props={{ tab: state.tab, update, collapsible: true }}
        />
        <Widget
          src={`${ownerId}/widget/Sidebar`}
          props={{ tab: state.tab, update, collapsible: false }}
        />
      </Sidebar>
      <ContentContainer className={isForm ? "form" : ""}>
        {tabContent}
      </ContentContainer>
    </Content>
  </Container>
);
