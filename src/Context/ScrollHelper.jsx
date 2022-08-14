import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export default function ScrollHelper() {
    const { pathname } = useLocation();

    useEffect(() => {
      // "document.documentElement.scrollTo" is the magic for React Router Dom v6
      console.log("hello",pathname)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional if you want to skip the scrolling animation
      });
    }, [pathname]);
  
    return null;
}
