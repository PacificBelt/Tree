<h1 id="laravel-sail-を使ったチーム開発の始め方"><a class="header" href="#laravel-sail-を使ったチーム開発の始め方">Laravel Sail を使ったチーム開発の始め方</a></h1>
<p>Laravel Sailを使用してチーム開発を行う場合，下記の手順となる．</p>
<ul>
<li>
<p>一人の開発者がプロジェクトを作成し，GitHub にソースコードを push する．</p>
</li>
<li>
<p>他の開発者は ↑ で作成された GitHub リポジトリをクローンし，手元で開発をすすめる．</p>
</li>
</ul>
<p>本資料は，既存のプロジェクトのリポジトリをクローンし，Docker 上で動作させるための手順を記載する．</p>
<h2 id="事前準備"><a class="header" href="#事前準備">事前準備</a></h2>
<p>docker が動く状態にしておく．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">docker -v

Docker version 20.10.12, build e91ed57

docker-compose -v

docker-compose version 1.26.2, build eefe0d31

</code></pre>

<p>curl も必要．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">curl --version

curl 7.68.0 (x86_64-pc-linux-gnu) libcurl/7.68.0 OpenSSL/1.1.1f zlib/1.2.11 brotli/1.0.7 libidn2/2.2.0 libpsl/0.21.0 (+libidn2/2.2.0) libssh/0.9.3/openssl/zlib nghttp2/1.40.0 librtmp/2.3
Release-Date: 2020-01-08
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtmp rtsp scp sftp smb smbs smtp smtps telnet tftp
Features: AsynchDNS brotli GSS-API HTTP2 HTTPS-proxy IDN IPv6 Kerberos Largefile libz NTLM NTLM_WB PSL SPNEGO SSL TLS-SRP UnixSockets
</code></pre>

<h2 id="プロジェクトのクローン"><a class="header" href="#プロジェクトのクローン">プロジェクトのクローン</a></h2>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">git <span class="hljs-built_in">clone</span> REPOSITORY_URL
</code></pre>
<h2 id="必要なディレクトリの作成"><a class="header" href="#必要なディレクトリの作成">必要なディレクトリの作成</a></h2>
<p>このまま起動すると必要なディレクト入りがなくてエラーになる．</p>
<p>そのため，下記コマンドを順に実行して必要なディレクトリを作成する．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">mkdir -p storage/framework/cache/data/
mkdir -p storage/framework/app/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
</code></pre>
<h2 id="コンテナ動作に必要なファイルをダウンロード--インストール"><a class="header" href="#コンテナ動作に必要なファイルをダウンロード--インストール">コンテナ動作に必要なファイルをダウンロード &amp; インストール</a></h2>
<p>Laravel Sail の実行に必要な vendor ディレクトリは Git では管理されていない．そのため，コマンドを実行して用意する必要がある．</p>
<p>下記コマンドを実行すると自動的に全部入る．6 行まとめて入力して実行すること．</p>
<blockquote>
<p>【参考】</p>
<ul>
<li>
<p><a href="https://readouble.com/laravel/9.x/ja/sail.html">https://readouble.com/laravel/9.x/ja/sail.html</a></p>
</li>
<li>
<p>上記 URL の「既存アプリケーションで Composer 依存関係のインストール」部分参照．</p>
</li>
</ul>
</blockquote>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">docker run --rm \
    -u <span class="hljs-string">"<span class="hljs-subst">$(id -u)</span>:<span class="hljs-subst">$(id -g)</span>"</span> \
    -v $(<span class="hljs-built_in">pwd</span>):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
</code></pre>
<h2 id="env-ファイルの準備"><a class="header" href="#env-ファイルの準備">env ファイルの準備</a></h2>
<p>下記コマンドで準備する．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">cp .env.example .env
</code></pre>
<p>ファイルができたら mysql 設定部分を以下のように編集する．</p>
<p><strong><code class="hljs">DB_USERNAME</code> と <code class="hljs">DB_PASSWORD</code> が DB のアクセス情報となる．phpmyadmin もこの情報でログインすることとなる．</strong></p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-txt hljs plaintext">DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=プロジェクト作成者のDB名に合わせる
DB_USERNAME=プロジェクト作成者のユーザ名に合わせる
DB_PASSWORD=プロジェクト作成者のパスワードに合わせる

</code></pre>

<h2 id="動作確認"><a class="header" href="#動作確認">動作確認</a></h2>
<p>下記コマンドでコンテナを立ち上げる</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">./vendor/bin/sail up -d
</code></pre>
<p>立ち上がったら下記コマンドを順に実行し，アプリケーションの準備を整える．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate
</code></pre>
<p>ブラウザから <code class="hljs">localhost</code> にアクセスするとアプリケーションの動作が確認できる．</p>
<p>また，<code class="hljs">localhost:8080</code> にアクセスすると phpmyadmin にアクセスできる．</p>
<p>コンテナ終了させるときは下記コマンドを実行する．</p>
<pre><div class="buttons"><button class="fa fa-copy clip-button" title="Copy to clipboard" aria-label="Copy to clipboard"><i class="tooltiptext"></i></button></div><code class="language-bash hljs">./vendor/bin/sail down
</code></pre>
