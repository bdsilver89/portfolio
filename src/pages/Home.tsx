import Hero from "@components/Hero";
import SideBar from "@components/Sidebar";
import Page from "@layouts/Page";

export default function Home() {
  return (
    <Page>
      <SideBar />
      <Hero />
    </Page>
  );
}
