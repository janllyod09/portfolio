import { useEffect, useRef, useState } from "react";

const DeferredSection = ({ children, minHeight = 500, rootMargin = "1200px 0px" }) => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsReady(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} style={!isReady ? { minHeight } : undefined}>
      {isReady ? children : null}
    </div>
  );
};

export default DeferredSection;
