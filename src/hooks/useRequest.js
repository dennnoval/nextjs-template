import { useSWRInfinite } from "swr"

const baseUrl = 'https://api.instantwebtools.net/v1'

export function usePagination() {
  const PAGE_LIMIT = 1
  const { data, error, size, setSize } = useSWRInfinite(
      (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null
        return baseUrl+'/passenger?size='+PAGE_LIMIT+'&page='+(pageIndex+1)
      }
    )

  const pageData = data ? [].concat(...data) : []

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT)

  return { pageData, error, size, setSize, isLoadingMore, isReachingEnd }
}

