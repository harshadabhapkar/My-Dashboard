import { Chart1, Chart2, Chart3, Chart4 } from './components/Reports/Analysis';
import Dropdown from './components/Reports/Dropdown';
import { MdDownload } from "react-icons/md";

export default function HomePage() {
  const timeFrameOptions = ['All Time', 'Last 7 Days', 'Last 30 Days', 'Last Year'];
  const peopleOptions = ['All People', 'Top Sellers', 'Top Buyers', 'Top Influencers'];
  const topicOptions = ['All Topics', 'Tech', 'Lifestyle', 'Business'];

  return (
    <div className="flex flex-col 2xl:p-4 xl:p-4 lg:p-4 md:p-3 p-1">
      {/* Reports Title */}
      <div className="flex justify-between w-full 2xl:pb-8 xl:pb-8 lg:pb-8 pb-4 border-b-2 border-gray-300">
        <h2 className="text-[24px] font-bold">Reports</h2>
        <h2 className='text-[#4D4D4D] flex flex-row gap-1 text-[16px] font-semibold'>
          <span><MdDownload className='mt-1 text-[20px]' /></span>Download
        </h2>
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 sm:gap-4 my-6">
        <Dropdown label="TimeFrame" options={timeFrameOptions} />
        <Dropdown label="People" options={peopleOptions} />
        <Dropdown label="Topic" options={topicOptions} />
      </div>

      {/* Data Analysis */}
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6">
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4/>
      </div>
    </div>

  );
}
