import Confetti from "react-confetti";

function confetti() {
    const { width, height } = useWindowSize();
    return (
      <div>
        <Confetti width={width} height={height}/>
        <h2>
          Hello
        </h2>
      </div>
    );
  }
export default confetti;