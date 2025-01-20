// components/TypewriterName.tsx
import TypewriterComponent from "typewriter-effect";

const TypewriterName: React.FC = () => {
  return (
    <h1 className="text-4xl font-bold font-heading">
      <TypewriterComponent
        options={{
          strings: ["Alvin Tolopan Armando Sibuea"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </h1>
  );
};

export default TypewriterName;
