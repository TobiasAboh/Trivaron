import Navbar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
    // <html lang="en">
    //   <body>
    //     {children}
    //   </body>
    // </html>
  );
}