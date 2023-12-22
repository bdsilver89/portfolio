import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <Navbar />
      <h1 className="text-white">Home</h1>
      <Footer />
    </main>
  );
}
