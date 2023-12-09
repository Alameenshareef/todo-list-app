
const apiRequest = (url = "", optionsObj = null, errMsg = null) => {
   try {
      const response = fetch(url, optionsObj)
      if (!response.ok) throw Error("please reload the app")
   } catch (error) {
      errMsg = error.Message
   } finally {
      return errMsg
   }
}


export default apiRequest
