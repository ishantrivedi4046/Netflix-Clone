import { API_REQUEST, CONTENT_TITLES } from 'constants/app.constant';
import { Content } from 'models/Content';
import { useEffect, useState } from 'react';
import { baseApiService } from 'services/BaseApiService';
import Banner from './Banner';
import ContentRow from './ContentRow';
import Header from './Header';
import Loader from './Loader';

const App: React.FC = () => {
  const [banner, setBanner] = useState<Content>();

  useEffect(() => {
    (async () => {
      const { data }: { data: { results: Array<Content> } } =
        await baseApiService.get(API_REQUEST.fetchNetflixOriginals);
      const resultsLength = (data?.results ?? []).length;
      if (!!resultsLength) {
        setBanner(data?.results[Math.floor(Math.random() * resultsLength - 1)]);
      }
    })();
  }, []);

  if (!banner) return <Loader />;

  return (
    <div className="w-full h-screen bg-black">
      <Header />
      <Banner content={banner} />
      <div className="mb-4 pt-8 bg-black">
        {Object.keys(API_REQUEST).map((key, index) => (
          <ContentRow
            uid={key}
            title={CONTENT_TITLES[index]}
            fetchUrl={(API_REQUEST as any)[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
