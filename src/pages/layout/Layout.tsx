import { Footer } from "components/footer/Footer";
import { Navbar } from "components/navbar/Navbar";
import { Outlet } from "react-router-dom";


export function Layout() {
 
  return (
    <>
      <Navbar />
      <main className="pageContent">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
