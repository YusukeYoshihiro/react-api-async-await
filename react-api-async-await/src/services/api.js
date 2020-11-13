import axios from "axios";
import { url } from "../constants";

export const doTranslate = async (input, languageCode) => {
  try {
    /** / axiosでキャンセルするためにsourceを作る
   : https://qiita.com/wintyo/items/1148ed14423f6b8bc368 */

    const cancellationToken = axios.CancelToken.source();

    const { data } = await axios.post(
      url,
      { q: input, target: languageCode },
      { cancelToken: cancellationToken.token }
    );

    return data.data.translations[0].translatedText;
  } catch (err) {
    console.log(err);
    return "";
  }
};
