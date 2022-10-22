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
from glob import glob`;

  const source_code_2_1_2 = `df_DeNA = pd.read_csv('./01_input/プロ野球フリーク_横浜DeNA_選手一覧.csv', encoding = 'cp932')
df_DeNA.head()`;

  const source_code_2_1_3 = `os.getcwd()`;

  const source_code_2_2_1 = `df_CVS = pd.read_csv('./01_input/コンビニエンスストア_都道府県別店舗数_2022年3月時点.csv', encoding='cp932', dtype={'都道府県コード' : 'object'})
df_CVS.head(10)`;

  const source_code_2_2_2 = `df_CVS.tail(10)`;

  const source_code_2_3_1 = `all_csv_files = glob('./01_input/*.csv')
all_csv_files`;

  const source_code_2_4_1 = `df_DeNA.to_csv('./02_output/出力テスト_横浜DeNA_選手一覧.csv',
  index=False, # インデックスは出力しない
  header=True, # 列名を出力する
  sep=',',  #csvファイルなので区切り文字はカンマ
  encoding='cp932') # cp932で保存`;
  /* eslint-enable */

  return (
    <div className="content mt-4 mb-4 main-content">
      <h1 className="has-text-success">Lesson 02</h1>

      <h3>講義概要</h3>
      <hr />
      <p>
        「ファイル操作」では、ファイルの読み込みや出力、読み込んだデータの中身の確認などを中心に扱います。
      </p>

      <h3>Lesson 02 で学習する主なメソッド</h3>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>メソッド</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pd.read_csv()</td>
            <td>csv ファイルの読み込み</td>
          </tr>
          <tr>
            <td>pd.to_csv()</td>
            <td>csv ファイルの書き出し</td>
          </tr>
          <tr>
            <td>df.head()</td>
            <td>先頭の行を表示</td>
          </tr>
          <tr>
            <td>df.tail()</td>
            <td>末尾の行を表示</td>
          </tr>
          <tr>
            <td>df.shape</td>
            <td>行数、列数の取得</td>
          </tr>
          <tr>
            <td>df.info()</td>
            <td>データの要約</td>
          </tr>
          <tr>
            <td>df.describe</td>
            <td>数値カラムに対して各種統計量を計算</td>
          </tr>
          <tr>
            <td>df.describe(include='all')</td>
            <td>全てのカラムに対して各種統計量を計算</td>
          </tr>
          <tr>
            <td>df.count()</td>
            <td>各カラムの有効データ数を表示</td>
          </tr>
          <tr>
            <td>df.dtype</td>
            <td>データ型を調べる</td>
          </tr>
          <tr>
            <td>df.columns</td>
            <td>カラム名を取得</td>
          </tr>
          <tr>
            <td>df['列名'].unique()</td>
            <td>指定したカラムの重複を削除した、ユニークな要素を返す</td>
          </tr>
        </tbody>
      </table>

      <h3>ファイルの読み込み</h3>
      <hr />
      <h4>事前準備</h4>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_1_1}
      </SyntaxHighlighter>
      <ul>
        <li>
          <code>os</code>
          モジュールとは、os（オペーレーションシステム）に関連する処理を行うためのモジュールで、ファイル、ディレクトリのパス操作やプロセス管理などの際によく使われます。
        </li>
        <li>
          この Lesson で登場するモジュール、関数を事前に読み込んでおきます。
        </li>
      </ul>
      <h4>例題</h4>
      <p>
        <code>01_input</code>フォルダ内に配置してある
        <code>プロ野球フリーク_横浜DeNA_選手一覧.csv</code>を読み込み、
        <code>df_DeNA</code>というデータフレーム名で格納しましょう。
      </p>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_1_2}
      </SyntaxHighlighter>
      <img src={`${process.env.PUBLIC_URL}/output_2_1_1.png`} alt="" />
      <p>
        カレントディレクトリとは、「Python が今いる場所（フォルダ /
        ディレクトリ）」のことを指します。Windosw
        系ではフォルダ、Unix（Mac）系ではディレクトリという呼び方が一般的ですが、両者は同じものです。Jupyter
        Notebook
        を配置している場所がカレントディレクトリとなります。また、ファイルのパスを指定する際など、カレントディレクトリまでのパス情報は「.」で省略することが可能です。
      </p>
      <p>
        次の 1
        行を実行してみると、カレントディレクトリの場所を確認することができます。
      </p>
      <p>
        <code>getcwd()</code>とは、GET（取得する） Current Working Directory
        の略です。
      </p>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_1_3}
      </SyntaxHighlighter>
      <h4>解説</h4>
      <p>
        csvファイルの読み込みには、<code>pd.read_csv()</code>を使います。
      </p>
      <p>オプション</p>
      <ul>
        <li>
          <code>header</code>：カラム名の行を指定する（デフォルトは0）。
          <code>header=None</code>はカラム名なしとみなす。
        </li>
        <li>
          <code>index_col</code>：<code>index_col=0</code>
          のように指定すると、1列目を<code>index</code>として扱う。
        </li>
        <li>
          <code>usecols</code>：指定した列だけを読み込む。ex.{" "}
          <code>usecols=[0,1,4]</code>や<code>usecols=['列名1', '列名2']</code>
          など。
        </li>
        <li>
          <code>skiprows</code>：指定した行数をスキップする。ex.{" "}
          <code>skiprows=2</code>や<code>skiprows=[0,3]</code>など。
        </li>
        <li>
          <code>skipfotter</code>：ファイルの末尾をスキップする。ex.{" "}
          <code>skipfooter=1</code>など。
        </li>
        <li>
          <code>nrows</code>：指定した行数だけ読み込む。
        </li>
        <li>
          <code>encoding</code>
          ：エンコード形式を指定する。Windowsの場合は、cp932が最適。
        </li>
        <blockquote>
          コンピュータ上で数字や文字などを表現するために、文字コードと呼ばれるコード体系が存在します。有名なコード体系としてはSHIFT_JIS、UTF-8などがあります。例えば、SHIFT_JISの文字コードにおいて、ひらがなの「あ」はコンピュータの内部では「0x82E0」として扱われます。一方、UTF-8では「0xe38182」がひらがなの「あ」に相当します。
          一般的に、Windows環境においてはSHIFT_JIS（≒cp932）、
          Linux環境（Mac）においてはUTF-8が適しています。
        </blockquote>
        <li>
          <code>engine</code>
          ：csvファイルを読み込む際の処理をC言語で行うかPythonで行うかを指定する。ファイルに日本語が含まれておりエラーが出る場合は、
          <code>engine='python'</code>と指定することで解決する。
        </li>
        <li>
          <code>dtype</code>：データの型を指定する。
          <code>
            {"{"}'列名' : 'データ型'{"}"}
          </code>
          で指定する。
        </li>
        <ul>
          <li>
            文字列：<code>object</code>を指定する。
          </li>
          <li>
            数値：<code>int64</code>（整数）や<code>float</code>
            （浮動小数点数）など。
          </li>
        </ul>
        <li>
          <code>names</code>
          ：読み込んだ列に自分で列名をつけたいときに使用する。ex.{" "}
          <code>names=["列名1","列名2","列名3"]</code>など。
        </li>
      </ul>
      <p>その他の読み込みフォーマット</p>
      <ul>
        <li>
          表形式のExcelを読み込む：<code>pd.read_excel()</code>
        </li>
        <li>
          表形式となっていないExcelを読み込む：<code>xlrd.open_workbook</code>
        </li>
        <li>
          tab区切りテキストファイルを読み込む：<code>pd.read_csv()</code>
          のオプションに<code>delimiter='\t'</code>を指定する。
        </li>
      </ul>

      <h3 className="title is-4">データフレームの確認</h3>
      <p>データフレームの特徴把握に有用なスキル</p>
      <table className="table">
        <thead>
          <tr>
            <th>メソッド</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>df.head()</td>
            <td>先頭の行を表示</td>
          </tr>
          <tr>
            <td>df.tail()</td>
            <td>末尾の行を表示</td>
          </tr>
          <tr>
            <td>df.shape</td>
            <td>行数・列数の取得</td>
          </tr>
          <tr>
            <td>df.info()</td>
            <td>データの要約</td>
          </tr>
          <tr>
            <td>df.describe(include='number')</td>
            <td>数値カラムに対して各種統計量を計算</td>
          </tr>
          <tr>
            <td>df.describe(exclude='number')</td>
            <td>数値カラム以外に対して各種統計量を計算</td>
          </tr>
          <tr>
            <td>df.describe(include='all')</td>
            <td>全てのカラムに対して各種統計量を計算</td>
          </tr>
          <tr>
            <td>df.count()</td>
            <td>各カラムの有効データ数を表示</td>
          </tr>
          <tr>
            <td>df.dtypes</td>
            <td>データ型を調べる</td>
          </tr>
          <tr>
            <td>df.columns</td>
            <td>カラム名を取得</td>
          </tr>
          <tr>
            <td>df['列名'].unique()</td>
            <td>指定したカラムの重複を削除した、ユニークな要素を返す</td>
          </tr>
        </tbody>
      </table>
      <p>
        初めて扱うデータは、そのデータの全体像や特徴を丁寧に理解する必要があります。データの理解なくして最適な分析は行えません。データがどのように格納されているのか、格納されているデータはどのような分布（統計量）のデータなのか、分析に不要な余計なデータが紛れ込んでいないかなど、確認すべきポイントはたくさんあります。初見のデータであってもそのデータの特徴をしっかりと把握できるように、
        「データフレームの確認」に関するスキルを身につけましょう。
      </p>
      <h4>例題</h4>
      <p>
        <code>01_input</code>フォルダ内に配置してある
        <code>コンビニエンスストア_都道府県別店舗数_2022年3月時点.csv</code>
        を読み込み、<code>df_CVS</code>
        というデータフレーム名で格納しましょう。また、読み込んだ結果である
        <code>df_CVS</code>の先頭10行と末尾10行のデータを表示させてみましょう。
      </p>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_2_1}
      </SyntaxHighlighter>
      <img src={`${process.env.PUBLIC_URL}/output_2_2_1.png`} alt="" />
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumber={true}
      >
        {source_code_2_2_2}
      </SyntaxHighlighter>
      <img src={`${process.env.PUBLIC_URL}/output_2_2_2.png`} alt="" />

      <h3 className="title is-4">ファイル情報の取得</h3>
      <h4>例題</h4>
      <p>
        <code>01_input</code>
        フォルダ内に配置してあるすべてのcsvファイルのパスを取得してみましょう。
      </p>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_3_1}
      </SyntaxHighlighter>
      <img src={`${process.env.PUBLIC_URL}/output_2_3_1.png`} alt="" />
      <h4>解説</h4>
      <p>
        複数のファイルを読み込んでデータの結合や集約を行うことはよくあります。ここでは、複数のcsvファイルを読み込む方法について見てみます。ある条件に当てはまるファイルを検索するには、
        <code>glob()</code>関数を使います。
      </p>
      <ul>
        <li>
          <code>glob()</code>
          関数はPythonが標準で提供する関数の1つで、pandasとは直接関係ありません。
        </li>
      </ul>
      <p>
        <code>glob()</code>関数の使用
      </p>
      <ul>
        <li>
          ワイルドカードパターン（なんでもありの文字列指定：*）を展開し、そのパターンにマッチするパス名のリストを得ることを指します。
        </li>
        <li>
          <code>glob()</code>
          の説明として、「ワイルドカードを用いたパターンの文字列」とされているケースもあります。
        </li>
      </ul>

      <h3 className="title is-4">ファイルの出力</h3>
      <p>
        「1.ファイルの読み込み」の例題で作成したデータフレーム
        <code>df_DeNA</code>を、以下の条件に従い出力してみましょう。
      </p>
      <ul>
        <li>
          出力先：<code>02_output</code>
        </li>
        <li>
          ファイル名：<code>出力テスト_横浜DeNA_選手一覧.csv</code>
        </li>
        <li>ファイル形式：csv形式</li>
        <li>オプション：特段指定なし</li>
      </ul>
      <SyntaxHighlighter
        language="python"
        style={monokai}
        showLineNumbers={true}
      >
        {source_code_2_4_1}
      </SyntaxHighlighter>
    </div>
  );
}

export default Lesson02;
