import React, { useEffect, useState } from "react";
import { usePaginatedQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";
import { ReactQueryDevtools } from "react-query-devtools";
import Loader from "react-loader-spinner";

const axiosget = async (key, next) => {
  const res = await axios(`https://swapi.dev/api/planets/?page=${next}`);
  return res.data;
};

const Planets = () => {
  const [nextpage, setnextPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", nextpage],
    axiosget,
    {
      staleTime: 0,
      cacheTime: 5,
    }
  );

  return (
    <>
      <div className="pln-div">
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
              <h2>Planets</h2>
              {resolvedData.results.map((planet) => (
                <Planet key={planet.name} planet={planet} />
              ))}
              <div className="nextpage">
                <button
                  className="previous"
                  disabled={nextpage === 1}
                  onClick={() => setnextPage((old) => Math.max(old - 1, 1))}
                >
                  ⟪ Previous
                </button>
                <button className="nmb_btn">{nextpage}</button>
                <button
                  className="next"
                  disabled={!latestData || !latestData.next}
                  onClick={() =>
                    setnextPage((old) =>
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

export default Planets;
