import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Header from "../ui/Header";
import Row from "../ui/Row";

function Settings() {
  return(
  <Row type="vertical">

    <Header as="h1">Update hotel settings</Header>
    <UpdateSettingsForm/>
  </Row>
  ) 
  
 
}

export default Settings;
