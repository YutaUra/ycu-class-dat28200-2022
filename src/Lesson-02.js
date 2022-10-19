import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Lesson02() {
  /* eslint-disable */
  // prettier-ignore
  const source_code_2_1_1 = 
`# モジュールのインポート
import pandas as pd
import numpy  as np
import os
from glob import glob

# ディレクトリの設定
root_in  = "./01_input/"  # 読み込むデータがあるフォルダ
root_out = "./02_output/" # 出力先のフォルダ`;
  /* eslint-enable */

  return (
    <div>
      <p className="title is-1 has-text-grey">Lesson 02</p>

      <p className="title is-4">Lesson 02 で学習する主なスキル</p>
      <p>表を挿入する</p>

      <p className="title is-4">ファイルの読み込み</p>
      <p className="subtitle is-5">事前準備</p>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
        className="source-code"
      >
        {source_code_2_1_1}
      </SyntaxHighlighter>

      <p className="title is-4">データフレームの確認</p>

      <p className="title is-4">ファイル情報の取得</p>

      <p className="title is-4">ファイルの出力</p>
    </div>
  );
}

export default Lesson02;
