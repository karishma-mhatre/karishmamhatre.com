import Image from 'next/image';

const SocialLink = ({ href, imageSrc, className, title, imageClassName, target, rel, imageWidth, imageHeight }) => {
  return (
      <a href={href} target={target} rel={rel} title={title} className={className}> 
        <Image src={imageSrc} className={imageClassName} width={imageWidth} height={imageHeight} />
      </a>
  );
};

export default SocialLink;