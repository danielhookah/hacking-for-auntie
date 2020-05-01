import axios from "axios";

const StoriesIdsURL = `${process.env.REACT_APP_API_URL}topstories.json?print=pretty`;
const StoryURL = (id) =>
  `${process.env.REACT_APP_API_URL}item/${id}/.json?print=pretty`;

export const getStoriesIds = () => axios.get(StoriesIdsURL);
export const getStory = (id) => axios.get(StoryURL(id));
