import React, { FC } from 'react';
import CardBody from './CardBody';
import ResponsiveImage from '../Image';

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
  className?: string;
}

const Card: FC<Props> = ({ imgSrc, imgAlt, title, linkPath, className }) => {
  return (
    <div className={`flex flex-col items-start p-0 w-full h-[360px] ${className || ''}`}>
      <div className="h-[167px] w-full">
        <ResponsiveImage
          src={imgSrc}
          alt={imgAlt}
          imageBpWidths={['(max-width: 640px) 100vw', '(min-width: 641px) 300px']}
          className="h-full"
        />
      </div>
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </div>
  );
};

export default Card;