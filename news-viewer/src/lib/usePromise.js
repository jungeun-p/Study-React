import { useEffect, useState } from "react";

// usePromise의 의존 배열 deps를 파라미터로 받아온다.
// 파라미터로 받아온 deps는 useEffect의 의존배열로 설정.
export default function usePromise(promiseCreator, deps) {
  // 대기중, 완료 결과, 실패 결과
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
