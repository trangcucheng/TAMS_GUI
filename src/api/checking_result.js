import { API_TAMS } from "./API_TAMS"

export const getSimilarDocument = async (id) => {
  const uri = `/getResult/${id}`
  const res = await API_TAMS.get(uri)
  return res
}

export const getListSentenceByCheckingResult = async (id, type) => {
    const uri = `/getListSentenceByCheckingResult?id=${id}&type=${type}`
    const res = await API_TAMS.get(uri)
    return res
  }
