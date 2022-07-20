import axios from "axios";
import { useEffect, useState } from "react";
import "./NewsApi.css";
export const NewsApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [clickValue, setClickValue] = useState();


  const getData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${clickValue}&token=c894ebb88be054af15fd401a6a59444a&country=in&max=15`
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
  const handleClick = () => {
    console.log(search);
    setClickValue(search);
  };


  useEffect(() => {
    getData();
    handleClick();
  }, [clickValue]);
  return (
    <>
      <div className="searchDiv">
        <input
          className="searchBox"
          type="text"
          onChange={handleChange}
          placeholder="search by title or country name."
        />
        <img className="searchIcon" onClick={handleClick} src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="search icon" />
      
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
