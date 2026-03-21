import s from "./HelloWorld.module.css";

const HelloWorld = () => {
  return (
    <div>
      HelloWorld
      <a href="/" className={s.homeBtn}>
        ← Return to safety - there's nothing for you here.
      </a>
    </div>
  );
};

export default HelloWorld;
