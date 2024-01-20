import cx from 'classnames';
import { Content } from 'models/Content';
import React from 'react';

interface ContentCardProps {
  image: string;
  poster: boolean;
  movie: Content;
  onClick: (name: string) => Promise<void>;
}

const ContentCard: React.FC<ContentCardProps> = ({
  image,
  poster,
  movie,
  onClick
}) => {
  return (
    <img
      key={movie?.id}
      src={image}
      alt="cards"
      className={cx(
        ' object-contain mr-3 h-32 w-full transition-transform duration-500 hover:scale-110 hover:opacity-100',
        {
          'h-64': poster
        }
      )}
      onClick={() =>
        onClick(movie?.name ?? movie?.original_name ?? movie?.title)
      }
    />
  );
};

export default ContentCard;
