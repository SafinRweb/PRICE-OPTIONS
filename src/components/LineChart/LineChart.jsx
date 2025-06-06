import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
const studentMarks = [
  { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 82 },
  { id: 2, name: "Ben", math: 85, physics: 80, chemistry: 88 },
  { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 94 },
  { id: 4, name: "Diana", math: 66, physics: 70, chemistry: 72 },
  { id: 5, name: "Ethan", math: 74, physics: 76, chemistry: 70 },
  { id: 6, name: "Fiona", math: 88, physics: 90, chemistry: 87 },
  { id: 7, name: "George", math: 95, physics: 93, chemistry: 96 },
  { id: 8, name: "Hannah", math: 81, physics: 83, chemistry: 85 },
  { id: 9, name: "Ivan", math: 69, physics: 65, chemistry: 68 },
  { id: 10, name: "Julia", math: 90, physics: 92, chemistry: 91 }
];

    return (
        <div className='mt-10'>
            <h1 className='text-3xl mb-5'>Some Students Mark Chart</h1>
           <LChart width={500} height={400} data={studentMarks}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
             <Line dataKey="math" stroke='red'></Line>
             <Line dataKey="physics" stroke='blue'></Line>
             <Line dataKey="chemistry"></Line>
           </LChart>
        </div>
    );
};

export default LineChart;