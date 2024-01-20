import { YOUTUBE_CONFIGURATIONS } from 'constants/app.constant';
import { ENV_VAR } from 'constants/envConfig';
import { ContentTitles } from 'enums/enum';
import { Content } from 'models/Content';
import movieTrailer from 'movie-trailer';
import React, { useCallback, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import Youtube from 'react-youtube';
import { baseApiService } from 'services/BaseApiService';
import ContentCard from './ContentCard';

interface ContentRowProps {
  title: string;
  uid: string;
  fetchUrl: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, uid, fetchUrl }) => {
  const [movies, setMovies] = useState<Array<Content>>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  const handleTrailer = async (name: string) => {
    try {
      const url = await movieTrailer(name || '');
      if (url) {
        const suffix = new URLSearchParams(new URL(url).search).get('v');
        setTrailerUrl(suffix);
      } else {
        throw new Error('Trailer url does not exits!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const { data }: { data: { results: Array<Content> } } =
        await baseApiService.get(fetchUrl);
      const resultsLength = (data?.results ?? []).length;
      setMovies(resultsLength ? data?.results : []);
    })();
  }, [fetchUrl]);

  const imageURL = useCallback(
    (path: string) => ENV_VAR.imageApiUrl + path,
    []
  );

  if (!movies?.length) return <ImSpinner2 className="animate-spin" />;

  return (
    <div key={uid}>
      <div className="text-white text-2xl font-medium ml-4">{title}</div>
      <div className="no-scrollbar flex overflow-y-hidden overflow-x-auto p-8">
        {movies?.map((movie) => (
          <ContentCard
            image={imageURL(
              title === ContentTitles.NETFLIX_ORIGINAL
                ? movie.poster_path
                : movie.backdrop_path
            )}
            poster={title === ContentTitles.NETFLIX_ORIGINAL}
            movie={movie}
            onClick={handleTrailer}
          />
        ))}
      </div>
      {trailerUrl && (
        <Youtube videoId={trailerUrl} opts={YOUTUBE_CONFIGURATIONS} />
      )}
    </div>
  );
};

export default ContentRow;
