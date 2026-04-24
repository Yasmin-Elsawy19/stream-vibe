import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../styles/MovieSkeleton";
import { useState, useEffect } from "react";


const MovieSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ marginBottom: '20px' }}>
        {/* image film*/}
        <Skeleton height={250} borderRadius={12} />
        {/* address film*/}
        <Skeleton width={`80%`} height={20} style={{ marginTop: '10px' }} />
        {/* timing*/}
        <Skeleton width={`40%`} height={15} />
      </div>
    </SkeletonTheme>
  );
};

