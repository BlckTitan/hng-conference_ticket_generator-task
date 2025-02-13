import TopNavComponent from '../components/TopNavComponent';
// import SelectionComponent from '../components/SelectionComponent';
import AttendeeDetails from '../components/AttendeeDetails'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center px-8 md:px-0'>
      <TopNavComponent/>
      {/* <SelectionComponent/> */}
      <AttendeeDetails/>
    </div>
  );
}
