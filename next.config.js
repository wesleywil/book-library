/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"dummyimage.com",
            },
            {
                protocol:"http",
                hostname:"books.google.com",
                
            }
        ]
    }
}

module.exports = nextConfig
