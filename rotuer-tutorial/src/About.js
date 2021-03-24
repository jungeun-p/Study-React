import React from "react";
import qs from "qs";
const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // ? 생략
  });
  console.log(location.search);
  console.log(query);

  const showDetail = query.detail === "true";
  return (
    <div>
      <h2>About</h2>
      {showDetail && <p>어바웃 페이지가 보이는 곳</p>}
    </div>
  );
};

export default About;
