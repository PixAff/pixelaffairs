import { useState, useEffect } from "react";

export default function useLatestData() {
  const [latesData, setLatestData] = useState();

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          allPageSettings {
            name
            imageIdx {
              asset {
                url
              }
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setLatestData(res.data.allPageSettings[0]));
  }, []);
  return latesData;
}
