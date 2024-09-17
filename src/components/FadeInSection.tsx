import { useState, useRef, useEffect, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: string;
}

export default function FadeInSection({ children, delay = "0s" }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
}
