import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Page from "@layouts/Page";

export default function NotFound() {
  return (
    <Page>
      <Navbar />
      <h1 className="text-white">Page Not Found</h1>
      <Footer />
    </Page>
  );
}
