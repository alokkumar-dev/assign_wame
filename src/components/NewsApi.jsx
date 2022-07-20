import axios from "axios";
import { useEffect, useState } from "react";
import "./NewsApi.css";
export const NewsApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("india");

  const getData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${search}&token=c894ebb88be054af15fd401a6a59444a&country=in&max=15`
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
          placeholder="search by title or country name."
        />
      
      </div>

      <div className="newsCont">
        {data &&
          data.map((news, index) => (
            <div key={index} className="oneNews">
              <div className="descNews">
                <h2 className="title">{news.title}</h2>
                <p className="desc">{news.description}</p>
                More about news{" "}
                <a className="moreAboutNews" href={news.url}>
                  Click here
                </a>
              </div>

              <img className="newsImg" src={news.image} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};
