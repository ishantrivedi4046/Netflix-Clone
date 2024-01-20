import cx from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = useCallback((cur: boolean) => {
    setShow(cur);
  }, []);

  useEffect(() => {
    const listner = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener('scroll', listner);
    return () => {
      window.removeEventListener('scroll', listner);
    };
  }, []);

  return (
    <div
      className={cx(
        ' fixed top-0 w-full p-5 h-20 flex justify-between items-center z-10 transition-all duration-500 ease-in',
        { 'bg-black': show }
      )}
    >
      <img src="/svgs/netflix-logo.wine.svg" alt="logo" className="w-32" />
      <img src="/svgs/netflix-seeklogo.svg" alt="logo-seek" className="h-8" />
    </div>
  );
};

export default React.memo(Header);
