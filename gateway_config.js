// the gateway config built from enviropnment settings
module.exports = {
  config: {
    "services": {
      "toshi": {
        "url": process.env.NZSHM22_TOSHI_API_URL,
        "key": process.env.NZSHM22_TOSHI_API_KEY,
        "prefix": "TOSHI"
      },
      "kororaa": {
        "url": process.env.NZSHM22_KORORAA_API_URL,
        "key": process.env.NZSHM22_KORORAA_API_KEY,
        "prefix": "KORORAA"
      }
    }
  }
}