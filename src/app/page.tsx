import TopNavComponent from '../components/TopNavComponent';
import SelectionComponent from '../components/SelectionComponent';

export default function Home() {

  return (
    <div className='w-full h-screen flex flex-col items-center px-4 md:px-0'>
      <TopNavComponent/>
      <SelectionComponent/>
    </div>
  );
}
