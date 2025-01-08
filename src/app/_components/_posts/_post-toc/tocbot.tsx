"use client";
import { useEffect } from "react";
import { init, destroy} from "tocbot";

const Tocbot: React.FC = () => {
  useEffect(() => {
    init({
      tocSelector: ".toc", // 目次を追加する class 名
      contentSelector: ".target-toc", // 目次を取得するコンテンツの class 名
      headingSelector: "h1, h2, h3, h4", // 目次として取得する見出しタグ
      collapseDepth: 6, // 折り畳む深さ
      linkClass: "toc-link-dummy", // リンクに追加する class 名
      headingsOffset: 64, // 見出しのオフセット
      scrollSmoothOffset: -64, //スムーススクロールのオフセット
    });

    // 不要となったtocbotインスタンスを削除
    return () => destroy();
  }, []);

  return <nav className="toc" />;
};

export default Tocbot;
