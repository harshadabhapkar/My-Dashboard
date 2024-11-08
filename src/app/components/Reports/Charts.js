import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from 'react-icons/bi';

// ChartOne Component (ChartCard component)
export function ChartOne() {
    const chartData = [
        { title: 'Active users', value: '27', subValue: '/80' },
        { title: 'Questions Answered', value: '3,298' },
        { title: 'Avg. Session Length', value: '2m 34s' },
        { title: 'Starting Knowledge', value: '64%', imageSrc: '/Graph.png' },
        { title: 'Current Knowledge', value: '86%', imageSrc: '/Graph.png' },
        { title: 'Knowledge Gain', value: '+34%', imageSrc: '/Graph.png' },
    ];
    return (
        <div className='grid grid-cols-3 gap-3'>
            {chartData.map((chart, index) => (
                <div key={index} className="flex flex-col gap-2 bg-white rounded-3xl shadow-sm 2xl:p-5 xl:p-5 lg:p-5 p-3">
                    <h2 className="text-[#4D4D4D] font-semibold 2xl:text-[14px] xl:text-[14px] lg:text-[13px] md:text-[13px] text-[10px]">{chart.title}</h2>
                    <h2 className="font-bold 2xl:text-[24px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[16px]">
                        {chart.value} <span className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[16px] text-gray-400">{chart.subValue}</span>
                    </h2>
                    {chart.imageSrc && (
                        <Image src={chart.imageSrc} alt={`${chart.title} graph`} width={200} height={33} />
                    )}
                </div>
            ))}
        </div>
    );
}

// ChartTwo Component (ColumnChart component)
export function ChartTwo() {
    const data = [
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 40 },
        { name: 'Apr', value: 25 },
        { name: 'May', value: 35 },
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 40 },
    ];
    return (
        <>
            <div className="bg-white rounded-3xl shadow-sm p-2">
                <div className='flex justify-between p-3 border-b-2 border-gray-300'>
                    <h2 className="text-[#4D4D4D] font-semibold 2xl:text-[14px] xl:text-[14px] lg:text-[13px] text-[14px]">Activity</h2>
                    <select className='border-none focus:outline-none'>
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data} margin={{ top: 5, bottom: 5 }} className='mt-4 right-4'>
                        <XAxis axisLine={false} dataKey="name" />
                        <YAxis axisLine={false} />
                        <Tooltip />
                        <Bar dataKey="value"
                            barSize={15}
                            radius={[10, 10, 10, 10]} // Adding rounded corners to the bars
                            fill="#1B59F8" background={{ fill: '#1B59F814' }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

//ChartThree Component (Upload data component)
function TopicList({ title, topics, gradientBg, gradientInner }) {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-4">
            <h2 className="text-[#4D4D4D] font-semibold 2xl:text-[14px] xl:text-[14px] lg:text-[13px]  text-[14px] mb-3">
                {title}
            </h2>
            <div className="flex flex-col gap-3">
                {topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <Image src={topic.imageSrc} alt="Topic Icon" width={60} height={60} />
                        <div className="flex flex-col gap-0 w-full">
                            <h2 className="font-semibold 2xl:text-[16px] xl:text-[16px] lg:text-[16px] text-[13px]">
                                {topic.title}
                            </h2>
                            <div className="flex gap-2">
                                <div
                                    className="flex-1 2xl:h-3 xl:h-3 lg:h-3 h-2 mt-2 rounded-full relative"
                                    style={{ background: gradientBg }}
                                >
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            background: gradientInner,
                                            width: topic.percent
                                        }}
                                    />
                                </div>
                                <div className="flex items-center 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] gap-1 mb-2">
                                    <span className="text-[#4D4D4D] font-bold">{topic.percent}</span>
                                    <span className="text-[#4D4D4D] text-md font-lg">{topic.label}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export function ChartThree() {
    const weakTopics = [
        { imageSrc: '/Image6.png', title: 'Food Safety', percent: '45%', label: 'Correct' },
        { imageSrc: '/Image2.png', title: 'Compliance Basics Procedures', percent: '60%', label: 'Correct' },
        { imageSrc: '/Image3.png', title: 'Company Networking', percent: '70%', label: 'Correct' },
    ];

    const strongTopics = [
        { imageSrc: '/Image6.png', title: 'Covid Protocols', percent: '90%', label: 'Correct' },
        { imageSrc: '/Image2.png', title: 'Cyber Security Basics', percent: '85%', label: 'Correct' },
        { imageSrc: '/Image3.png', title: 'Social Media Policies', percent: '70%', label: 'Correct' },
    ];

    return (
        <>
            <TopicList
                title="Weakest Topic"
                topics={weakTopics}
                gradientBg="rgba(255, 64, 128, 0.1)"
                gradientInner="linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)"
            />
            <TopicList
                title="Strongest Topic"
                topics={strongTopics}
                gradientBg="rgba(47, 234, 155, 0.1)"
                gradientInner="linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)"
            />
        </>
    );
}

//ChartFour Component (ListData)
const leaderboardData = [
    {
        id: 1,
        name: 'Jesse Thomas',
        points: 637,
        accuracy: '98% Correct',
        imgSrc: '/Thomas2.png',
        rankChange: 'up'
    },
    {
        id: 2,
        name: 'Thisal Mathiyazhagan',
        points: 637,
        accuracy: '89% Correct',
        imgSrc: '/Thomas.png',
        rankChange: 'down'
    },
    {
        id: 3,
        name: 'Helen Chuang',
        points: 637,
        accuracy: '98% Correct',
        imgSrc: '/Thomas2.png',
        rankChange: 'up'
    },
    {
        id: 4,
        name: 'Jesse Thomas',
        points: 637,
        accuracy: '98% Correct',
        imgSrc: '/Thomas.png',
        rankChange: 'up'
    }
];

function LeaderboardList({ title, data, showImage = true }) {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-5">
            <h2 className="text-[#4D4D4D] font-semibold 2xl:text-[14px] xl:text-[14px] lg:text-[13px] text-[14px] mb-3">
                {title}
            </h2>
            <ul>
                {data.map((user) => (
                    <li key={user.id} className='flex mt-5 justify-between mb-4'>
                        <div className='flex gap-2'>
                            {showImage && (
                                <Image
                                    src={user.imgSrc}
                                    alt="Photo"
                                    className='rounded-full'
                                    width={45}
                                    height={45}
                                />
                            )}
                            <div className="flex flex-col">
                                <h2 className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[13px] text-[12px] font-semibold'>{user.name}</h2>
                                <h2 className="text-gray-500 font-lg 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[13px] text-[12px]">
                                    {user.points} {showImage ? 'Points' : 'Points/User'} - {user.accuracy}
                                </h2>
                            </div>
                        </div>
                        <div className='flex gap-2 font-bold'>
                            1
                            {user.rankChange === 'up' ? (
                                <BiSolidUpArrow className='text-green-500 mt-1' />
                            ) : (
                                <BiSolidDownArrow className='text-red-500 mt-1' />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ChartFour() {
    return (
        <>
            <LeaderboardList title="User Leaderboard" data={leaderboardData} showImage={true} />
            <LeaderboardList title="Group Leaderboard" data={leaderboardData} showImage={false} />
        </>
    );
}



