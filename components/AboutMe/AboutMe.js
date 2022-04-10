
import Image from 'next/image'

import ImageLink from '../ImageLink';

import { SOCIAL_IMAGE_LINK } from './aboutMe.constants';
import styles from './aboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.about_me_container}> 
      <div className={styles.about_me_img}>
        <Image 
         src="/images/profile.png"
         alt="Karishma"
         layout='fill'
        />
      </div> 
      <div className={styles.desc_link_container}>
        <div className={styles.about_me_desc}>
          Hi, <br/>
          I am <b>Karishma</b>. I am a <b>Software Engineer</b> based out of <b>Bangalore, India</b>. I like to sketch and learn new tech in my free time. Ping me to work together or chat over a coffee.
        </div>
        <div className={styles.social_links_container}>
          {
            SOCIAL_IMAGE_LINK.map(({ imageSrc, link, title }) => {
              return <ImageLink key={title} href={link} imageSrc={imageSrc} title={title} className={styles.social_link} rel='nofollow' target='_blank' imageWidth={24} imageHeight={24}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AboutMe;