import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { fetchUserData } from "./states";

function FetchData() {
  const userData = useRecoilValue(fetchUserData);
  const { data } = userData;

  return (
    <div>
      <div>Details With Suspense</div>
      {data.map((item) => (
        <div key={item.id}>
          <p>
            {`Email: ${item.email} Name: ${item.title} ${item.cover}`}.
          </p>
        </div>
      ))}
    </div>
  );
}

function DetailsWithoutSuspense() {
  const userDetails = useRecoilValueLoadable(fetchUserData);
  const { state } = userDetails;

  if (userDetails.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (state === "loading") {
    return <div>Its DetailsWithoutSuspense loading</div>;
  }

  if (state === "hasValue") {
    const {
      contents: { data }
    } = userDetails;
    return (
      <div>
        <div>Details Without Suspense</div>
        {data.map((item) => (
          <div key={item.id}>
            <p>
              {`Email: ${item.title} Name: ${item.cover} ${item.subtitle}`}
              .
            </p>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export { FetchData, DetailsWithoutSuspense };
