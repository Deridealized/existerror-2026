import useGitHubActivity from "../../hooks/useGitHubActivity";
import s from "./GitHubFeed.module.css";

const GitHubFeed = () => {
  const { commits, loading, error } = useGitHubActivity();

  return (
    <div className={s.gitFeed}>
      <p>Recent GitHub Activity</p>
      {loading && <p>Loading...</p>}
      {error && <p className={s.error}>GitHub Signal Lost</p>}
      {commits.map((commit) => (
        <div key={commit.sha} className={s.commitContainer}>
          <a
            className={s.link}
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <p className={s.author}>Jamie Hey @ {commit.commit.author.date}</p>
          <p className={s.commit}>{commit.commit.message}</p>
        </div>
      ))}
    </div>
  );
};

export default GitHubFeed;
