import { useState } from "react";
import HistoryContent from "../tabs/HistoryContent";
import PsychologyContent from "../tabs/PsychologyContent";
import SocialContent from "../tabs/SocialContent";
import OtherContent from "../tabs/OtherContent";
import StockMarketContent from "../tabs/StockMarket";
import DrAmbedkar from "../tabs/DrAmbedkarContent";
import NepoleanContent from "../tabs/NepoleanContent";

const GetBlogs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="mt-8">
      <div className="flex mx-2 ms-2">
        <button
          className={`px-5 py-2 ${
            activeTab === 1
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(1)}
        >
          History
        </button>
        <button
          className={`px-5 py-2 ml-4 ${
            activeTab === 2
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Psychology
        </button>
        <button
          className={`px-5 py-2  ml-4 ${
            activeTab === 3
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Social
        </button>
        <button
          className={`px-5 py-2  ml-4 ${
            activeTab === 4
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(4)}
        >
         Dr. Ambedkar
        </button>
        <button
          className={`px-5 py-2  ml-4 ${
            activeTab === 5
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(5)}
        >
          Napoleon
        </button>
        <button
          className={`px-5 py-2 ml-4 ${
            activeTab === 6
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(6)}
        >
          Stock Market
        </button>
        <button
          className={`px-5 py-2 ml-4 ${
            activeTab === 7
              ? "bg-blue-500 text-white blog-button-style"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 blog-button-style"
          }`}
          onClick={() => handleTabClick(7)}
        >
          Others
        </button>
        {/* Add more buttons as needed */}
      </div>

      <div className="mt-4  mx-2 ms-2">
        {activeTab === 1 && <HistoryContent />}
        {activeTab === 2 && <PsychologyContent />}
        {activeTab === 3 && <SocialContent />}
        {activeTab === 4 && <DrAmbedkar />}
        {activeTab === 5 && <NepoleanContent />}
        {activeTab === 6 && <StockMarketContent />}
        {activeTab === 7 && <OtherContent />}
        {/* Add more tab content components as needed */}
      </div>
    </div>
  );
};
export default GetBlogs;
