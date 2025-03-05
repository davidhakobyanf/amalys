"use server";
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import VideoPlayer from "@/app/_components/AboutUs/VideoPlayer/VideoPlayer";
import AboutContent from "@/app/_components/AboutUs/AboutContent/AboutContent";
import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <section id="aboutUs">
            <BlockCloudContainer text={'О нас'} version='block'  style={{ top: '-100px' }}  />
            <div className={`mainGrid    ${styles.about__us__content}`}>
                <VideoPlayer/>
                <AboutContent/>
            </div>
        </section>
    );
};

export default AboutUs;
