
export const GOOGLE_API_KEY =process.env.REACT_APP_GOOGLE_API_KEY

export const YOUTUBE_API_KEY = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_KEY = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const OFFSET_LIVE_CHAT = 25;

export const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="

export const COMMENT_URL ="https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&maxResults=50&orderby=published&videoId="


export const VIDEO_INFO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key="+GOOGLE_API_KEY+"&id="

export const SUGGESTED_VIDEO_LIST_API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=59&type=video&regionCode=IN&key="+GOOGLE_API_KEY+"&relatedToVideoId=";