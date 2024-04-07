import { useEffect, useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import JobInfo from "./JobInfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentJob, serCurrentJob] = useState(0);

  function handleCurrentJob(id) {
    serCurrentJob(id);
  }
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="jobs-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ButtonsContainer
            data={data}
            handleCurrentJob={handleCurrentJob}
            currentJob={currentJob}
          />
          <JobInfo data={data} currentJob={currentJob} />
        </>
      )}
    </section>
  );
};
export default App;
