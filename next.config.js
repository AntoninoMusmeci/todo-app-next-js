

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports = (phase, { defaultConfig }) => {
  
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("config!!!!!!!!!!!")
    return {
      ...defaultConfig,
      reactStrictMode: true,

    }
  }

  return defaultConfig
} 



// module.exports = nextConfig
