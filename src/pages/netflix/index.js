import Row from "../../components/Row";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import requests from "../request/request";

function index() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} />
      <Row
        title={"Animation Movies"}
        fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default index;