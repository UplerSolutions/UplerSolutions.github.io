import { useLocalStorage } from 'usehooks-ts'

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
    'recent-searches',
    []
  )

  return {
    recentSearches,
    setRecentSearches
  }
}
