import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";


      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    console.log("Is pointer: ", isPointer)
  }, [isPointer])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className="w-3 h-3 bg-accent rounded-full"
          style={{
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)",
          }}
        />
      </motion.div>

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div
          className="w-10 h-10 border-2 border-primary rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(255, 0, 255, 0.6)",
          }}
        />
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] opacity-30"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <div
          className="w-8 h-8 border border-accent/50 rounded-full"
        />
      </motion.div>

      {/* Pixel grid effect when hovering */}
      {isPointer && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
          }}
        >
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.05,
                  }}
                  className="w-1 h-1 bg-primary"
                  style={{
                    boxShadow: "0 0 5px rgba(255, 0, 255, 0.8)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default CustomCursor
