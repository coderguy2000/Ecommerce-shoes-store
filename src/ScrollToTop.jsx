import { useEffect } from "react";

function ScrollToTop({ history }) {
  useEffect(() => {
    // const unlisten = history.listen(() => {});
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
}

export default ScrollToTop;
