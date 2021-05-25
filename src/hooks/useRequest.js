import { useSWRInfinite } from "swr"

export function usePagination(url, limitPerPage) {
  const { data, error, size, setSize } = useSWRInfinite(
      (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null
        const baseUrl = url.href.split('?')[0]
        const params = new URLSearchParams(url.href.split('?')[1])
        for (const [key, val] of params.entries()) {
          if (key === 'page') {
            params.set(key, pageIndex)
          } else {
            params.set(key, limitPerPage)
          }
        }
        return baseUrl+'?'+params.toString()
      }
    )

  const pageData = data ? [].concat(...data) : []

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < limitPerPage)

  return { pageData, error, size, setSize, isLoadingMore, isReachingEnd }
}

