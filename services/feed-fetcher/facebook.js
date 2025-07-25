const FACEBOOK_APP_ID = 'YOUR_APP_ID';
const FACEBOOK_APP_SECRET = 'YOUR_APP_SECRET';

async function getFacebookFeed(accessToken) {
  const response = await fetch(`https://graph.facebook.com/me/feed?access_token=${accessToken}`);
  const data = await response.json();
  return data;
}
