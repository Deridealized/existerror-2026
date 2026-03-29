import s from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <div className={s.terminal}>
        <div className={s.terminalBar}>
          <div className={s.terminalDot}></div>
          <div className={s.terminalDot}></div>
          <div className={s.terminalDot}></div>
          <div className={s.terminalTitle}>existerror - system.log</div>
        </div>

        <div className={s.terminalBody}>
          <div className={s.errorLabel}>Critical System Failure</div>

          <div className={s.errorCode}>
            EXIST<span>_ERROR</span>
          </div>

          <span className={s.line + " " + s.gap}></span>
          <div className={s.line + " " + s.command}>
            locate page --path="%UNKNOWN PATH SPECIFIED%"
          </div>
          <div className={s.line + " " + s.error}>
            ERR: Resource does not exist at this location.
          </div>
          <span className={s.line + " " + s.gap}></span>
          <div className={s.line + " " + s.command}>
            diagnosis --system-broken
          </div>
          <div className={s.line}>Scanning known redirects.....</div>
          <div className={s.line + " " + s.error}>
            FATAL: Page does not exist.
          </div>
          <span className={s.line + " " + s.gap}></span>

          <div className={s.progressWrap}>
            <div className={s.progressBar}></div>
          </div>
          <div className={s.progressLabel}>
            Recovery attempt: failed
            <span className={s.cursor}></span>
          </div>

          <span className={s.line + " " + s.gap}></span>
          <div className={s.line + " " + s.warning}>
            // Suggestion: return to known territory.
          </div>

          <a href="/" className={s.homeBtn}>
            ← Return to safety - there's nothing for you here.
          </a>
        </div>
      </div>

      <div className={s.sig}>JAMIE HEY - EXISTERROR DIGITAL - MMXXVI</div>
    </div>
  );
};

export default Error;
