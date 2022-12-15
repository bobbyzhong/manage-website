import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";

export default function Home() {
    return (
        <div className={styles.container}>
            <Hero></Hero>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
}
