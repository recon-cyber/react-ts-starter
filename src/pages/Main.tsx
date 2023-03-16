import ExtendedTopic from '../components/extended-topic';
import Search from '../components/search';
import Topic from '../components/topics';
import { PostQuery } from '../queries/post-query';

function Main() {
  const run = async () => {
    const result = await PostQuery(
      {
        topic: 'The Rise Of Ziyech At Chelsea - A Football Documentary',
      },
      `http://localhost:8080/get-topic-content`
    );
    console.log(3333, result);
  };
  run();
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
