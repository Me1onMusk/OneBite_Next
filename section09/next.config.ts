import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images : {
        domains : [
            'shopping-phinf.pstatic.net'  //이 도메인의 이미지는 안전함. 
        ]
    }
};

export default nextConfig;
