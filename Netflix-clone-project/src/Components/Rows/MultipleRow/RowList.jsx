import React from "react";
import "../MultipleRow/rowList.css";
import SingleRow from "../SingleRow/SingleRow";
import requests from "../../../utils/Requestes";

export default function RowList() {
  return (
    <>
      <SingleRow
        title="NETFLIX ORIGINSALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <SingleRow
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <SingleRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <SingleRow title="Comady" fetchUrl={requests.fetchComedyMovies} />
      <SingleRow title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <SingleRow title="Romantic" fetchUrl={requests.fetchRomanticMovies}/>
      <SingleRow title="Documentary" fetchUrl={requests.fetchDocumentaries} />
      <SingleRow title="TV Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
}
