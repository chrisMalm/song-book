import React, {Suspense} from "react";

const AddLyrics = React.lazy(() => import('./AddLyrics'));


 const SongDetail =  () => {
    return (
      <div className="container">
        Song detail
        <Suspense fallback={<>Loading</>}>
            <AddLyrics/>
        </Suspense>
      </div> 
      ) 
}

export default SongDetail;