import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import axios from "axios";
import Person from "./Person";
import { ReactQueryDevtools } from "react-query-devtools";
import Loader from "react-loader-spinner";

const getaxios = async (key, next) => {
  const res = await axios.get(`https://swapi.dev/api/people/?page=${next}`);
  return res.data;
};

const Persons = () => {
  const [nextpage, setNextPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["person", nextpage],
    getaxios,
    {
      staleTime: 0,
      cacheTime: 1,
    }
  );

  return (
    <>
      <div className="pepl-div">
        {status === "loading" && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
          <>
            <div>
              <h2>Persons</h2>
              {resolvedData.results.map((person) => (
                <Person key={person.name} person={person} />
              ))}
              <div className="nextpage">
                <button
                  className="previous"
                  disabled={nextpage === 1}
                  onClick={() => setNextPage((old) => Math.max(old - 1, 1))}
                >
                  ⟪ Previous
                </button>
                <button className="nmb_btn">{nextpage}</button>
                <button
                  className="next"
                  disabled={!latestData || !latestData.next}
                  onClick={() =>
                    setNextPage((old) =>
                      !latestData || !latestData.next ? old : old + 1
                    )
                  }
                >
                  Next ⟫
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Persons;
