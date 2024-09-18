import React, { Suspense } from "react";
import { fetchProfileData } from "../fakeapi";

const resource = fetchProfileData();

const  SuspenseApp = ()=> {
  return (
    <div className="suspense">
    <h1>header</h1>
    
    <Suspense  fallback={<h1>Loading Country...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading States...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
    </div>
  );
}

function ProfileDetails() {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  const posts = resource.posts.read();
  return (
    <ul className="states">
    {posts.map(state => (
        <li key={state.key}>{state.name}</li>
        ))}
    </ul>
  );
}

export default SuspenseApp;