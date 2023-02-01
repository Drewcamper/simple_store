import { useCallback, useContext } from "react";
import { SimpleStoreContext } from "../../context/context";
import { GetSamples } from "../../services/apiRequest"; 



export const SearchBox = () => {
  
  const { orderNumber, status, comment,sampleBatchStartingNum, sampleBatchSampleCount, sampleBatchDispenseCount, simpleBatchRegDatTime, simpleBatchComment, simpleBatchRegUser, groupFormReferenceNum, groupFormSampleSpecies, groupFormSampleCount, groupFormComment} = useContext(SimpleStoreContext);

  const handleInputKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      GetSamples()
        .then((data) => {          
        })
        .catch((err) => {
        });
    }
  }, []);

  return (
    <div className="conatiner">
      <input
        className="input"
        placeholder="Search..."
        // onChange={(e) => setCity(e.target.value)}
        // value={city}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};
