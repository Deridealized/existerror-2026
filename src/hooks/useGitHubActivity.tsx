import { useEffect, useState } from "react";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: { date: string };
  };
  html_url: string;
}

const useGitHubActivity = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Deridealized/existerror-2026/commits?per_page=5",
    )
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCommits(data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { commits, loading, error };
};

export default useGitHubActivity;
