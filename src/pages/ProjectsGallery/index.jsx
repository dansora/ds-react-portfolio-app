import axios from "axios";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const ProjectsGallery = () => {
  const [responseData, setResponseData] = useState({
    isDataAvailable: false,
    results: [],
  });

  const getProjectsData = () => {
    // axios request to get random data api restaurants
    axios
      .get(
        `https://random-data-api.com/api/restaurant/random_restaurant?size=6`
      )
      .then((res) => {
        // setting the data in the state
        // isDataAvailable relies on the res.status being successfull. if the status is anything else, the search button will still be displayed
        setResponseData({
          isDataAvailable: res.status === 200,
          results: res.data,
        });
      });
  };

  return (
    <div>
      <div>Find my projects</div>
      {/* conditionally rendering the search button */}
      {!responseData.isDataAvailable && (
        <button onClick={getProjectsData}>Find</button>
      )}

      {/* conditionally rendering the Restaurant Cards */}
      {responseData.isDataAvailable && (
        <div>
          {responseData.results.map((restaurant) => {
            return (
              <>
                <ProjectCard
                  key={restaurant.id}
                  restName={restaurant.name}
                  restPhoneNo={restaurant.phone_number}
                  restAddress={restaurant.address}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsGallery;
