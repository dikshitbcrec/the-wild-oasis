import Header from "../ui/Header";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";



function Account() {

 
  return (
    <>
      <Header as="h1">Update your account</Header>

      <Row>
        <Header as="h3">Update user data</Header>
        <UpdateUserDataForm/>
      </Row>

      <Row>
        <Header as="h3">Update password</Header>
       <UpdatePasswordForm/>
      </Row>
    </>
  );
}

export default Account;
