'use server';
import {getAboutContent} from "@/service/public/aboutContent";
import styles from './AboutContent.module.scss';

const AboutContent = async  () => {
    const {about} = await getAboutContent()
    return (
        <div className={styles.about__content__container}>
                    <span dangerouslySetInnerHTML={{__html: about?.text}}/>
        </div>
    );
};

export default AboutContent;