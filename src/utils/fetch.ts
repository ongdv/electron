export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('[FAIL] fetch data');

    throw error;
  }
  return await res.json();
};
