import { ENV_VAR } from 'constants/envConfig';
import { Content } from 'models/Content';
import React, { useMemo } from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

interface BannerProps {
  content: Content;
}

const Banner: React.FC<BannerProps> = ({ content }) => {
  const name = useMemo(
    () => content?.name ?? content?.original_name,
    [content]
  );

  return (
    <div
      className="h-full text-white bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${ENV_VAR.imageApiUrl + content?.backdrop_path})`
      }}
    >
      <div className="sm:w-[75%] lg:w-[60%] xl:w-[40%] px-8">
        <h1 className="text-8xl sm:text-6xl font-extrabold">{name}</h1>
        <div className="flex items-center my-5 gap-3">
          <button className="cursor-pointer flex items-center outline-none border-none bg-white text-black font-bold rounded-md px-8 py-2">
            <FaPlay className="mr-2" />
            Play
          </button>
          <button className=" cursor-pointer flex items-center bg-black-button outline-none border-none font-bold rounded-md px-8 py-2">
            <MdInfoOutline className="mr-2 w-6 h-6" />
            More Info
          </button>
        </div>
        <h1 className="sm:text-lg sm:leading-[1.35rem] lg:leading-6 lg:text-[1.25rem] h-40">
          {content?.overview}
        </h1>
      </div>
    </div>
  );
};

export default React.memo(Banner);
