const ownerId = "nearcon23.near";

State.init({
  firstName: "",
  firstNameError: "",
  lastName: "",
  lastNameError: "",
  email: "",
  emailError: "",
  persona: null,
  personaError: "",
  accountId: context.accountId,
  jobTitle: "",
  jobTitleError: "",
  projectOrCompany: "",
  projectOrCompanyError: "",
  country: null,
  countryError: "",
  age: null,
  ageError: "",
  goal: "",
  goalError: "",
  twitter: "",
  twitterError: "",
  telegram: "",
  telegramError: "",
  paymentMethod: null,
  paymentMethodError: "",
});

const isValid = () => {
  return (
    state.firstName &&
    state.firstNameError === "" &&
    state.lastName &&
    state.lastNameError === "" &&
    state.email &&
    state.emailError === "" &&
    state.persona &&
    state.personaError === "" &&
    state.jobTitle &&
    state.jobTitleError === "" &&
    state.projectOrCompany &&
    state.projectOrCompanyError === "" &&
    state.country &&
    state.countryError === "" &&
    state.age &&
    state.ageError === "" &&
    state.goal &&
    state.goalError === "" &&
    state.twitter &&
    state.twitterError === "" &&
    state.telegram &&
    state.telegramError === "" &&
    state.paymentMethod &&
    state.paymentMethodError === ""
  );
};

const onSubmit = () => {
  console.log("Submitted!", { state });
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2em;

  & > span {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 450;
    font-size: 0.95em;
    line-height: 150%;
    color: #717069;
    max-width: 20em;
  }
`;

const SubmitButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1.5em;
  gap: 0.5em;
  background: #161615;
  border-radius: 50px;
  border: none;
  color: #ffffff;

  &.disabled {
    background: #717069 !important;
  }

  &:hover,
  &:focus,
  &:active {
    background: #161615;
    text-decoration: none;
    color: #ffffff;
  }
`;

const url = () => {
  if (!isValid()) {
    return "#";
  }

  let urlString = "https://tickets.nearcon.org/?";
  urlString += `firstname=${state.firstName}&`;
  urlString += `lastname=${state.lastName}&`;
  urlString += `email=${state.email}&`;
  urlString += `persona=${state.persona}&`;
  urlString += `jobtitle=${state.jobTitle}&`;
  urlString += `projectorcompany=${state.projectOrCompany}&`;
  urlString += `country=${state.country}&`;
  urlString += `age=${state.age}&`;
  urlString += `goal=${state.goal}&`;
  urlString += `twitter=${state.twitter}&`;
  urlString += `telegram=${state.telegram}&`;
  urlString += `paymentmethod=${state.paymentMethod}`;

  return urlString;
};

return (
  <Container>
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "First Name",
        value: state.firstName,
        error: state.firstNameError,
        placeholder: "Enter First Name",
        onChange: (firstName) => State.update({ firstName }),
        validate: () => {
          if (state.firstName.length < 3) {
            State.update({
              firstNameError: "First name must be at least 3 characters",
            });
            return;
          }

          if (state.firstName.length > 100) {
            State.update({
              firstNameError: "First name must be less than 100 characters",
            });
            return;
          }

          State.update({ firstNameError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Last Name",
        value: state.lastName,
        error: state.lastNameError,
        placeholder: "Enter Last Name",
        onChange: (lastName) => State.update({ lastName }),
        validate: () => {
          if (state.lastName.length < 3) {
            State.update({
              lastNameError: "First last must be at least 3 characters",
            });
            return;
          }

          if (state.lastName.length > 100) {
            State.update({
              lastNameError: "First last must be less than 100 characters",
            });
            return;
          }

          State.update({ lastNameError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Email",
        value: state.email,
        error: state.emailError,
        placeholder: "Enter Email",
        onChange: (email) => State.update({ email }),
        validate: () => {
          if (state.email.length < 3) {
            State.update({
              emailError: "Email must be at least 3 characters",
            });
            return;
          }

          if (state.email.length > 100) {
            State.update({
              emailError: "Email must be less than 100 characters",
            });
            return;
          }

          State.update({ emailError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Select`}
      props={{
        label: "I consider myself...",
        value: state.persona,
        error: state.personaError,
        placeholder: "Choose...",
        options: [
          { value: "developer", text: "Developer" },
          { value: "creative", text: "Creative" },
          { value: "entrepreneur", text: "Entrepreneur" },
          { value: "other", text: "Other" },
        ],
        onChange: (persona) => State.update({ persona }),
        validate: () => {
          if (!state.persona) {
            State.update({
              personaError: "Please select a persona",
            });
            return;
          }

          State.update({ personaError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.AccountId`}
      props={{
        label: "NEAR Account",
        value: state.accountId,
        onChange: (accountId) => State.update({ accountId }),
        setError: (accountIdError) => State.update({ accountIdError }),
        error: state.accountIdError,
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Job Title",
        value: state.jobTitle,
        error: state.jobTitleError,
        placeholder: "Enter Job Title",
        onChange: (jobTitle) => State.update({ jobTitle }),
        validate: () => {
          if (state.jobTitle.length < 3) {
            State.update({
              jobTitleError: "Job title must be at least 3 characters",
            });
            return;
          }

          if (state.jobTitle.length > 100) {
            State.update({
              jobTitleError: "Job title must be less than 100 characters",
            });
            return;
          }

          State.update({ jobTitleError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Name of Project or Company",
        value: state.projectOrCompany,
        error: state.projectOrCompanyError,
        placeholder: "Enter Name of Project or Company",
        onChange: (projectOrCompany) => State.update({ projectOrCompany }),
        validate: () => {
          if (state.projectOrCompany.length < 3) {
            State.update({
              projectOrCompanyError:
                "Project or company name must be at least 3 characters",
            });
            return;
          }

          if (state.projectOrCompany.length > 100) {
            State.update({
              projectOrCompanyError:
                "Project or company name must be less than 100 characters",
            });
            return;
          }

          State.update({ projectOrCompanyError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Select`}
      props={{
        label: "Country",
        value: state.country,
        error: state.countryError,
        placeholder: "Choose...",
        options: [
          { value: "united-states", text: "United States" },
          { value: "canada", text: "Canada" },
          { value: "germany", text: "Germany" },
        ],
        onChange: (country) => State.update({ country }),
        validate: () => {
          if (!state.country) {
            State.update({
              countryError: "Please select a country",
            });
            return;
          }

          State.update({ countryError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Number`}
      props={{
        label: "Age",
        value: state.age,
        error: state.ageError,
        placeholder: "Enter Age",
        onChange: (age) => State.update({ age }),
        validate: () => {
          if (state.age < 1) {
            State.update({
              ageError: "Age must be at least 1",
            });
            return;
          }

          if (state.age > 120) {
            State.update({
              ageError: "Age must be less than 120",
            });
            return;
          }

          State.update({ ageError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.TextArea`}
      props={{
        label: "What do you hope to discover at Nearcon?",
        value: state.goal,
        error: state.goalError,
        placeholder: "",
        onChange: (goal) => State.update({ goal }),
        validate: () => {
          if (state.goal.length < 3) {
            State.update({
              goalError: "Goal must be at least 3 characters",
            });
            return;
          }

          if (state.goal.length > 500) {
            State.update({
              goalError: "Goal must be less than 500 characters",
            });
            return;
          }

          State.update({ goalError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Twitter",
        value: state.twitter,
        error: state.twitterError,
        placeholder: "Enter Twitter",
        onChange: (twitter) => State.update({ twitter }),
        validate: () => {
          if (state.twitter.length < 3) {
            State.update({
              twitterError: "Twitter must be at least 3 characters",
            });
            return;
          }

          if (state.twitter.length > 100) {
            State.update({
              twitterError: "Twitter must be less than 100 characters",
            });
            return;
          }

          State.update({ twitterError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.Text`}
      props={{
        label: "Telegram",
        value: state.telegram,
        error: state.telegramError,
        placeholder: "Enter Telegram",
        onChange: (telegram) => State.update({ telegram }),
        validate: () => {
          if (state.telegram.length < 3) {
            State.update({
              telegramError: "Telegram must be at least 3 characters",
            });
            return;
          }

          if (state.telegram.length > 100) {
            State.update({
              telegramError: "Telegram must be less than 100 characters",
            });
            return;
          }

          State.update({ telegramError: "" });
        },
      }}
    />
    <Widget
      src={`${ownerId}/widget/Inputs.RadioGroup`}
      props={{
        items: [
          { value: "near", name: "NEAR" },
          { value: "fiat", name: "Fiat (USD, etc.)" },
        ],
        value: state.paymentMethod,
        error: state.paymentMethodError,
        label: "I would like to pay with...",
        onChange: (paymentMethod) => State.update({ paymentMethod }),
        validate: () => {
          if (!state.paymentMethod) {
            State.update({
              paymentMethodError: "Please select a payment method",
            });
            return;
          }

          State.update({ paymentMethodError: "" });
        },
      }}
    />
    <SubmitButton href={url()} className={isValid() ? "" : "disabled"}>
      Submit
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9375 5V13.125C15.9375 13.3736 15.8387 13.6121 15.6629 13.7879C15.4871 13.9637 15.2486 14.0625 15 14.0625C14.7513 14.0625 14.5129 13.9637 14.3371 13.7879C14.1612 13.6121 14.0625 13.3736 14.0625 13.125V7.26562L5.66325 15.6633C5.48713 15.8394 5.24826 15.9383 4.99918 15.9383C4.75011 15.9383 4.51124 15.8394 4.33512 15.6633C4.159 15.4872 4.06006 15.2483 4.06006 14.9992C4.06006 14.7501 4.159 14.5113 4.33512 14.3352L12.7343 5.9375H6.87497C6.62633 5.9375 6.38787 5.83873 6.21205 5.66291C6.03624 5.4871 5.93747 5.24864 5.93747 5C5.93747 4.75136 6.03624 4.5129 6.21205 4.33709C6.38787 4.16127 6.62633 4.0625 6.87497 4.0625H15C15.2486 4.0625 15.4871 4.16127 15.6629 4.33709C15.8387 4.5129 15.9375 4.75136 15.9375 5Z"
          fill="#A1A09A"
        />
      </svg>
    </SubmitButton>
    <span>Upon submission, you will be redirected to complete your order.</span>
  </Container>
);
