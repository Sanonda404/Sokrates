export default function WelcomeScreen({ onBegin, posesLoaded }) {
  return (
    <div className="welcome">
      <div className="welcome__inner">
        {/* Floating lotus */}
        <div className="welcome__lotus">
          <img src="logo.png" alt="Logo" height={150} width={150}/>
        </div>
        {/* Heading */}
        <h1 className="welcome__title">SOKRATES</h1>
        <p className="welcome__subtitle">Mind · Body · Wisdom</p>
        {/* Info card */}
        <div className="welcome__card">
          <p className="welcome__card-greeting">Welcome, dear student.</p>
          <p className="welcome__card-body">
           We, Team Night's Watch believes that true education goes beyond the screen. 
            To achieve <strong>SDG 4 (Quality Education)</strong>, we must first address 
            <strong>SDG 3 (Good Health & Well-being)</strong>. We recognize that 
            the sedentary nature of digital learning is a barrier to both physical health 
            and cognitive retention. Our platform reintroduces the essential balance 
            between <strong>physical movement</strong> and <strong>intellectual growth</strong>. 
            Science shows that a primed body leads to a sharper mind—so, before we engage 
            the intellect, let us first awaken the body.
          </p>
          <p className="welcome__card-body">
            You will be guided through a short <strong>Yoga</strong> pose. Hold
            it steadily at <strong>≥80% accuracy</strong> for{" "}
            <strong>10 seconds</strong> to unlock the dialogue that follows.
          </p>
        </div>
        {/* CTA */}
        <button
          className="welcome__btn"
          onClick={onBegin}
          disabled={!posesLoaded}
        >
          {posesLoaded ? "Begin Practice →" : "Loading poses…"}
        </button>
        <p className="welcome__hint">
          Please ensure your camera is enabled before the yoga session begins.
        </p>
      </div>
    </div>
  );
}