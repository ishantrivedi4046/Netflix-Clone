import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="bg-black h-screen w-full  flex justify-center items-center ">
      <img
        src="/svgs/netflix-seeklogo.svg"
        alt="logo-seek"
        className="h-16 animate-pulse"
      />
    </div>
  );
};

export default React.memo(Loader);
