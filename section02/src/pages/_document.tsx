
import { Html, Head, Main, NextScript } from "next/document";


// 모든 페이지 공통 HTML // 
// 1. 메타 태그 
// 2. 폰트 
// 3. 구글 애널릭틱스 

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}