'use client'

import { useState } from 'react';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBanner';
import adBannersData from './data/adBanners.json';
import { AdBanner } from './types/adBanner';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  const [adBanners, setAdBanners] = useState<AdBanner[]>(adBannersData as AdBanner[]);
  const [selectedBanner, setSelectedBanner] = useState<AdBanner | null>(null);

  const handleEdit = (id: number) => {
    const banner = adBanners.find((banner) => banner.id === id);
    setSelectedBanner(banner || null);
  };

  const handleSave = (editedBanner: AdBanner) => {
    const updatedBanners = adBanners.map((banner) =>
      banner.id === editedBanner.id ? editedBanner : banner
    );
    setAdBanners(updatedBanners);
    setSelectedBanner(null);
  };

  const handleClose = () => {
    setSelectedBanner(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-blue-500">
        <h1 className='text-center pt-5 pb-5 text-2xl font-bold text-white'>Banner Bot</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adBanners.map((banner) => (
            <BannerImageComp key={banner.id} {...banner} onEdit={handleEdit} />
          ))}
        </div>
        {selectedBanner && (
          <EditBannerTemplateBs banner={selectedBanner} onSave={handleSave} onClose={handleClose} />
        )}
      </div>
    </>
  );
};

export default Home;
