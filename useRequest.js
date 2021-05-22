import { useSWRInfinite } from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = 'https://api.instantwebtools.net/v1'

export const usePaginatePassengers = () => {
  const url = baseUrl + '/passenger'
  const PAGE_LIMIT = 1

  const { data, error, size, setSize } = useSWRInfinite(
    pageIndex => url+'?page='+pageIndex+'&size='+PAGE_LIMIT
  )

  const res = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT)

  return { res, error, size, setSize, isLoadingMore, isReachingEnd }
}

