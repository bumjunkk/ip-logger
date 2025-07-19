exports.handler = async (event, context) => {
  // 접속자 IP는 헤더에 있음
  const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';

  // 서버에선 파일 쓰기 어려움(서버리스 특성),  
  // 대신 로그로 남기거나 DB 연동 가능

  console.log(`접속 IP: ${ip}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ ip }),
  };
};
