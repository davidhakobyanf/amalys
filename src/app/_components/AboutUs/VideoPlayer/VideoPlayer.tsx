"use server";
import styles from './VideoPlayer.module.scss'
const VideoPlayer = () => {
    return (
        // <div className={styles.video__container}>
            <iframe
                className={styles.iframe}
                src="https://www.youtube.com/embed/18x4rPVxQkQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allow="autoplay"

                allowFullScreen
            />

        // </div>
    );
};

export default VideoPlayer;