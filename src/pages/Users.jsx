import Header from "../ui/Header";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {

  return (
  <>
  <Header as="h1">Create a new user</Header>
  <SignupForm/>
  </>
  )
}

export default NewUsers;
