import { useCallback, useContext } from "react";
import { SimpleStoreContext } from "../context/context";
import { getSamples } from "../services/apiRequest"; 



export const SearchBox = () => {
  
  const { city, setCity, groupFormReferenceNum, setGroupFormReferenceNum, groupFormSampleSpecies, setGroupFormSampleSpecies, groupFormSampleCount, setGroupFormSampleCount, groupFormComment, setGroupFormComment } = useContext(SimpleStoreContext);

  const handleInputKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      getSamples(city)
        .then((data) => {          
          setCity("");
        })
        .catch((err) => {
       
        });
    }
  }, [city, setCity]);

  return (
    <div className="conatiner">
      <input
        className="input"
        placeholder="Search..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};
