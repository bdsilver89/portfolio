import SideBar from "@components/Sidebar";
import Page from "@layouts/Page";

export default function NotFound() {
  return (
    <Page>
      <SideBar />
      <h1 className="text-white">Page Not Found</h1>
    </Page>
  );
}
