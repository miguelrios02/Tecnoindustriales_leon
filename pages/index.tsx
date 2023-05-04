import { Layout } from '../components/layout/Layout';
import { useCategories } from '../lib/services/categories.services';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/background.jpg")] bg-cover bg-center app-banner -mt-4 gap-5'></div>
      {/* CONTENIDO */}
      <div className="bg-red-300 h-[70vh]">CONTENIDO</div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
