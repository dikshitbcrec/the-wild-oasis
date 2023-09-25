import Header from "../ui/Header";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

function Dashboard() {
  return (
    <>
    <Row type="horizontal">
      <Header as="h1">Dashboard</Header>
      <DashboardFilter/>
    </Row>
    <Row type="vertical">
      <DashboardLayout/>
    </Row>
    </>
  );
}

export default Dashboard;
