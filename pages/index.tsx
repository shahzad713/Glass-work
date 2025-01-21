import Head from "next/head";

// Components
import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomeBlogsBlock from "@/app/pageComponents/Home/HomeBlogsBlock";
import Footer from "@/app/Components/Footer";
import HomeTestimonialsBlock from "@/app/pageComponents/Home/HomeTestimonialsBlock";
import GetInTouchContactForm from "@/app/Components/GetInTouchContactForm";

// Styles
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title> Labbyk Glass| Expert Glazing, Aluminum, and Glass Solutions</title>
        <meta
          name="description"
          content="Discover Labbyk Glass and Aluminium's expert glazing solutions, including aluminum curtain walls, windows, doors, glass installations, and more. Serving Pakistan, Lahore, and beyond with premium services."
        />
        <meta
          name="keywords"
          content="Labbyk Glass and Aluminium, glazing solutions, aluminum curtain wall, windows, doors, glass installations, Pakistan Green Building Regulations, Pakistan Civil Defense, Pakistan Estidama Regulations, fiberglass sheds, glass railings, Pakistan, Lahore, Karachi, Multan,"
        />
        <meta name="author" content="bilalmohib" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Labbyk Glass and Aluminium",
            description:
              "Expert glazing solutions, including aluminum curtain walls, windows, doors, and glass installations in Pakistan, Lahore.",
            url: "https://main.d3gzdf9o5o75nn.amplifyapp.com/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pakistan",
              addressCountry: "Lahore",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92327265330",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Head>
      <Navbar />

      <main>
        <HomeBanner />
        <HomeServicesBlock />
        <HomeProjectsBlock />
        <section>
          {/* <HomeTestimonialsBlock /> */}
        </section>
        
        <div
          className={`mt-[72rem] sm:mt-[70rem] lg:mt-auto ${styles.projectsBottomMargin}`}
        ></div>
        <br />
        <br />
      </main>

      <div style={{ position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
