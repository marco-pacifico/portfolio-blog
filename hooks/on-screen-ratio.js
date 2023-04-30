import React from "react";

function useOnScreenRatio() {
  const [ratio, setRatio] = React.useState(false);
  const nodeToObserve = React.useRef();
  const threshold = Array.from(Array(100).keys(), (i) => i / 100);
  // const threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        setRatio(entry.intersectionRatio);
      },
      {
        threshold,
      }
    );

    observer.observe(nodeToObserve.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [nodeToObserve, ratio];
}

export default useOnScreenRatio;
