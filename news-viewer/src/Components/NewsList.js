import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    <NewsListBlock>Error!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === "all" ? "" : `&category=${category}`;
  //       const res = await axios.get(
  //         `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
  //       );
  //       setArticles(res.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  // if (loading) {
  //   return <NewsListBlock>loading...</NewsListBlock>;
  // }

  // return (
  //   articles && (
  //     <NewsListBlock>
  //       {articles.map((article) => (
  //         <NewsItem article={article} key={article.url} />
  //       ))}
  //     </NewsListBlock>
  //   )
  // );
};

export default NewsList;
