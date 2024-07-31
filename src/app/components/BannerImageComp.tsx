import React from 'react';
import { AdBanner } from '../types/adBanner';
import { MdModeEdit } from "react-icons/md";

interface AdBannerProps extends AdBanner {
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<AdBannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div className={`relative ${background} rounded-lg shadow-md`}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

      <div className="absolute inset-0 p-4 bg-black bg-opacity-50 rounded-lg flex flex-col justify-between">
        <button
          onClick={() => onEdit(id)}
          className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-75 rounded-full p-1"
        >
          <MdModeEdit />
        </button>

        <div className="text-white">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>

        <button className="self-start bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-1 px-4 rounded-lg mt-2 shadow-md hover:opacity-90 transition-opacity">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
