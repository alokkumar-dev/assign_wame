import axios from "axios";
import { useEffect, useState } from "react";
import "./NewsApi.css";
export const NewsApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("india");

  // `https://gnews.io/api/v4/top-headlines?token=9085e7acc6f554d87bb660bbe7670acb&page=${pageNo}&limit=${PAGE_LIMIT}`
  // let pageLimit = 15;
  const getData = () => {
    // 87934253545cccb473a34c909c48d049

    axios
      .get(
        `https://gnews.io/api/v4/search?q=${search}&token=9085e7acc6f554d87bb660bbe7670acb&country=in&max=15`
      )
      .then((res) => {
        console.log(res.data);
        setData([...res.data.articles]);
      });
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
    <div className="searchDiv">
      <input
      className="searchBox"
        type="text"
        onChange={handleChange}
        placeholder="search by title"
      />
      </div>

      <h2>News api page</h2>
      <div className="newsCont">
        {data &&
          data.map((news, index) => (
            <div key={index} className="oneNews">
              <div className="descNews">
                <p>{news.title}</p>
                <h2>{news.description}</h2>
              </div>

              <img className="newsImg" src={news.image} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};
