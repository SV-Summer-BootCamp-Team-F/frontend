import ThreeDPieChart from "./ThreeDPieChart";
import IntroLineChart from "./IntroLineChart";
const TestPage = () => {
 const data: [string, number][] = [
  ["Teacher", 11.1],
  ["Engineer", 18.1],
  ["Doctor", 13.6],
  ["Accountant", 9.2],
  ["Lawyer", 12.8],
  ["Salesperson", 7.5],
  ["Artist", 8.4],
  ["Chef", 7.0],
  ["Other", 12.3],
 ];
 const chartData: {
  name: string;
  data: number[] | null[];
 }[] = [
  {
   name: "Subscriber",
   data: [21908, 25000, 24000, 32000, 35000, 32500, 42000, 35000, 50000, 53000, 57000],
  },
 ];
 // return tailwindcss example component here
 return (
  <>
   <div>
    <ThreeDPieChart data={data} />
   </div>
   <div>
    {/* <h1>U.S Solar Employment Growth Chart</h1> */}
    <IntroLineChart chartData={chartData} />
   </div>
   {/* <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <div className="container">
     <div
      className={`flex flex-wrap items-center justify-between rounded-lg border border-[#F4F7FF] bg-[#F4F7FF] py-8 px-6 xs:px-10 md:px-8 lg:px-10`}
     >
      <div className="w-full md:w-7/12 lg:w-2/3">
       <div className="mb-6 md:mb-0">
        <h4 className="mb-1 text-xl font-bold text-black xs:text-2xl md:text-xl lg:text-2xl">
         We use cookies
        </h4>
        <p className="text-base font-medium text-body-color">
         Please, accept these sweeties to continue enjoying our site!
        </p>
       </div>
      </div>
      <div className="w-full md:w-5/12 lg:w-1/3">
       <div className="flex items-center space-x-3 md:justify-end">
        <button className="inline-flex items-center justify-center rounded-md bg-rememberBlue py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
         Accept
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-white py-[10px] px-8 text-center text-base font-semibold text-body-color shadow-card hover:bg-primary hover:text-white">
         Close
        </button>
       </div>
      </div>
     </div>
    </div>
   </section> */}
  </>
 );
};
export default TestPage;