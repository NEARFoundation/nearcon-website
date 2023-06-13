const ownerId = "nearcon23.near";
const label = props.label ?? "Account ID";
const placeholder = props.placeholder ?? "Enter your account ID";
const value = props.value ?? "";
const onChange = props.onChange ?? (() => {});
const setError = props.setError ?? (() => {});
const error = props.error ?? "";
const accountIdRegex =
  /^(([a-z\d]+[\-_])*[a-z\d]+\.)*([a-z\d]+[\-_])*[a-z\d]+$/;

const validate = async () => {
  if (typeof value !== "string") {
    setError("Account ID must be a text value!");
    return;
  }

  if (value.length < 2) {
    setError("Account ID must be at least 2 characters long!");
    return;
  }

  if (value.length > 64) {
    setError("Account ID must be at most 64 characters long!");
    return;
  }

  if (!accountIdRegex.test(value)) {
    setError(
      <>
        Account ID must follow the rules specified{" "}
        <a
          href="https://nomicon.io/DataStructures/Account#account-id-rules"
          target="_blank"
        >
          here
        </a>
        !
      </>
    );
    return;
  }

  setError("");
};

return (
  <Widget
    src={`${ownerId}/widget/Inputs.Text`}
    props={{
      label,
      placeholder,
      value,
      onChange,
      validate,
      error,
    }}
  />
);
