import { redirect } from "next/dist/server/api-utils";

const Dashboard = () => redirect("/dashboard/basic-info");

export default Dashboard;
