export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
import { getType } from '@/assets/js/api';
export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};

export const invalidateSubreddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
};

/**
 * 异步action,发送请求
 * @param {object} subreddit
 */
export const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};

/**
 * 获取到请求
 * @param {object} subreddit
 */
export const receivePosts = (subreddit, data) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: data.map((child) => child),
    receivedAt: Date.now()
  };
};

export function fetchPosts(subreddit) {
  return function(dispatch) {
    console.log('开始请求');
    dispatch(requestPosts(subreddit));
    return getType().then((res) => {
      console.log(res);
      dispatch(receivePosts(subreddit, res));
    });
  };
}
