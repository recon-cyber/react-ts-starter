import ExtendedTopic from '../components/extended-topic';
import Search from '../components/search';
import Topic from '../components/topics';

function Main() {
  return (
    <>
      <h1 className=" m-auto p-10 text-7xl"> Main Page : In progres ... </h1>
      <div className=" w-1/2 flex-row p-10">
        <div>
          <h1 className=" mb-1 text-xl">Search for topics :</h1>
          <Search />
        </div>
        <div className=" mt-5 flex space-x-8">
          <Topic />
          <ExtendedTopic />
        </div>
      </div>
    </>
  );
}

export default Main;
