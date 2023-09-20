"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';


// {"EmotionalAnalysis":[
//   {"negative:""},
//   {"positive": ""},
//   {"Neutral": ""},
//   { "joy": "" },
//   { "trust": "" },
//   { "fear": "" },
//   { "surprise": "" },
//   { "sadness": "" },
//   { "disgust": "" },
//   { "anger": "" },
//   { "anticipation": "" }
//   }
// ]}

const data = [
  {
    emotion: 'anticipation',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    emotion: 'trust',
    A: 98,
    B: 80,
    fullMark: 150,
  },
  {
    emotion: 'fear',
    A: 86,
    B: 50,
    fullMark: 150,
  },
  {
    emotion: 'surprise',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    emotion: 'sadness',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    emotion: 'disgust',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    emotion: 'anger',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    emotion: 'joy',
    A: 100,
    B: 90,
    fullMark: 150,
  },
];

const SimpleRadarChart = () => {
  return (
    <div className='max-w-4xl mx-auto mt-20 mb-10'>
      <div>
        <div className='text-center'>
          <span className='text-2xl border-b italic font-bold'>
            Classification of emotions
          </span>
        </div>
        <div className='w-hull flex justify-center'>
          <ResponsiveContainer width={"100%"} height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="emotion" />
              <PolarRadiusAxis angle={72.5} domain={[0, 100]} />
              <Radar name="2023-10-01" dataKey="A" stroke="#800000" fill="#800000" fillOpacity={0.6} />
              {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
          <div className='hidden md:block ml-4'>
            <div className='text-xl'>List of dates</div>
            <li>any data......</li>
          </div>
        </div>
        <div className='md:hidden text-center'>
          <div className='text-xl'>List of dates</div>
          <li>any data......</li>
        </div>
      </div>
    </div>
  );
};

export default SimpleRadarChart;
