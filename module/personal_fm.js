// 私人FM

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/v1/radio/get`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
