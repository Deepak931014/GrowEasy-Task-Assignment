import React, { useState } from "react";
import { AdBanner } from "../types/adBanner";
import { MdFileUpload, MdDownload, MdClose } from "react-icons/md";

interface EditBannerProps {
  banner: AdBanner;
  onSave: (banner: AdBanner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [editedBanner, setEditedBanner] = useState<AdBanner>(banner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedBanner((prev) => ({
          ...prev,
          image: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = editedBanner.image;
    link.download = "banner-image";
    link.click();
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>
        <h2 className="font-semibold text-xl text-gray-500 mb-2">
          Edit Banner
        </h2>

        <div className="relative mb-4">
          <img
            src={editedBanner.image}
            alt={editedBanner.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
        </div>

        <div className="flex mb-4">
          <label
            htmlFor="imageUpload"
            className="bg-gray-200 bg-opacity-75 rounded-full p-6 cursor-pointer"
          >
            <MdFileUpload className="text-gray-500" size={24} />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-500 font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={editedBanner.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-500 font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={editedBanner.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Description"
          />
        </div>

        <div className="flex flex-col gap-1 mt-6">
          <button
            onClick={handleSave}
            className="bg-gray-600 text-center font-bold text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <MdFileUpload className="mr-2" size={20} />
            Done
          </button>
          <button
            onClick={handleDownload}
            className="bg-white text-blue-500 text-center font-bold px-4 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <MdDownload className="mr-2" size={20} />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
