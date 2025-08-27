import Header from "../../components/Header";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}