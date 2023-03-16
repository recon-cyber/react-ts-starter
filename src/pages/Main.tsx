import { useEffect, useState } from 'react';
import ExtendedTopic from '../components/extended-topic';
import Search from '../components/search';
import Topic from '../components/topics';
import { PostQuery } from '../queries/post-query';

function Main() {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loadingStateTopic, setLoadingStateTopic] = useState(false);
  const [loadingStateSearch, setLoadingStateSearch] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [topicSelected, setTopicSelected] = useState('');

  // make the post request to chatGpt
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateChange = (e: any) => {
    setInputValue(e.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const generateContent = async (index: any) => {
    const { topic } = suggestions[index];
    setTopicSelected(topic);
    setLoadingStateTopic(true);
    const result = await PostQuery(
      {
        topic,
      },
      `http://localhost:8080/get-topic-content`
    );
    setGeneratedContent(result);
    setLoadingStateTopic(false);
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const keyDownHandler = async (event: any) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setLoadingStateSearch(true);
        const result = await PostQuery(
          {
            keyword: inputValue,
          },
          `http://localhost:8080/search-topic`
        );
        setSuggestions(JSON.parse(result));
        setLoadingStateSearch(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  return (
    <>
      <h1 className=" m-auto p-10 text-7xl"> Main Page : In progress ... </h1>
      <div className=" w-1/2 flex-row p-10">
        <div>
          <h1 className=" mb-1 text-xl">Search for topics :</h1>
          <Search searchFunc={updateChange} />
        </div>
        <div className="h-full flex-row">
          <Topic
            suggestions={suggestions}
            loading={loadingStateSearch}
            generateContent={generateContent}
          />
          <ExtendedTopic
            loading={loadingStateTopic}
            generatedContent={generatedContent}
            topic={topicSelected.length >= 1 ? topicSelected : ''}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
