// netlify/functions/log-ip.js
exports.handler = async (event, context) => {
  const ip =
    event.headers['x-forwarded-for']?.split(',')[0] ||
    event.headers['client-ip'] ||
    '알 수 없음';

  console.log("요청 IP:", ip);

  return {
    statusCode: 200,
    body: JSON.stringify({ ip }),
  };
};
