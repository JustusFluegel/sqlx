(function() {var type_impls = {
"sqlx":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pool%3CDB%3E\" class=\"impl\"><a href=\"#impl-Pool%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;<span class=\"where fmt-newline\">where\n    DB: <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect\" class=\"method\"><h4 class=\"code-header\">pub async fn <a href=\"sqlx/struct.Pool.html#tymethod.connect\" class=\"fn\">connect</a>(url: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new connection pool with a default pool configuration and\nthe given connection URL, and immediately establish one connection.</p>\n<p>Refer to the relevant <code>ConnectOptions</code> impl for your database for the expected URL format:</p>\n<ul>\n<li>Postgres: [<code>PgConnectOptions</code>][crate::postgres::PgConnectOptions]</li>\n<li>MySQL: [<code>MySqlConnectOptions</code>][crate::mysql::MySqlConnectOptions]</li>\n<li>SQLite: [<code>SqliteConnectOptions</code>][crate::sqlite::SqliteConnectOptions]</li>\n<li>MSSQL: [<code>MssqlConnectOptions</code>][crate::mssql::MssqlConnectOptions]</li>\n</ul>\n<p>The default configuration is mainly suited for testing and light-duty applications.\nFor production applications, you’ll likely want to make at least few tweaks.</p>\n<p>See <a href=\"sqlx/pool/struct.PoolOptions.html#method.new\" title=\"associated function sqlx::pool::PoolOptions::new\"><code>PoolOptions::new()</code></a> for details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect_with\" class=\"method\"><h4 class=\"code-header\">pub async fn <a href=\"sqlx/struct.Pool.html#tymethod.connect_with\" class=\"fn\">connect_with</a>(\n    options: &lt;&lt;DB as <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Database.html#associatedtype.Connection\" title=\"type sqlx::Database::Connection\">Connection</a> as <a class=\"trait\" href=\"sqlx/trait.Connection.html\" title=\"trait sqlx::Connection\">Connection</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Connection.html#associatedtype.Options\" title=\"type sqlx::Connection::Options\">Options</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new connection pool with a default pool configuration and\nthe given <code>ConnectOptions</code>, and immediately establish one connection.</p>\n<p>The default configuration is mainly suited for testing and light-duty applications.\nFor production applications, you’ll likely want to make at least few tweaks.</p>\n<p>See <a href=\"sqlx/pool/struct.PoolOptions.html#method.new\" title=\"associated function sqlx::pool::PoolOptions::new\"><code>PoolOptions::new()</code></a> for details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect_lazy\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.connect_lazy\" class=\"fn\">connect_lazy</a>(url: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new connection pool with a default pool configuration and\nthe given connection URL.</p>\n<p>The pool will establish connections only as needed.</p>\n<p>Refer to the relevant [<code>ConnectOptions</code>] impl for your database for the expected URL format:</p>\n<ul>\n<li>Postgres: [<code>PgConnectOptions</code>][crate::postgres::PgConnectOptions]</li>\n<li>MySQL: [<code>MySqlConnectOptions</code>][crate::mysql::MySqlConnectOptions]</li>\n<li>SQLite: [<code>SqliteConnectOptions</code>][crate::sqlite::SqliteConnectOptions]</li>\n<li>MSSQL: [<code>MssqlConnectOptions</code>][crate::mssql::MssqlConnectOptions]</li>\n</ul>\n<p>The default configuration is mainly suited for testing and light-duty applications.\nFor production applications, you’ll likely want to make at least few tweaks.</p>\n<p>See <a href=\"sqlx/pool/struct.PoolOptions.html#method.new\" title=\"associated function sqlx::pool::PoolOptions::new\"><code>PoolOptions::new()</code></a> for details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect_lazy_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.connect_lazy_with\" class=\"fn\">connect_lazy_with</a>(\n    options: &lt;&lt;DB as <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Database.html#associatedtype.Connection\" title=\"type sqlx::Database::Connection\">Connection</a> as <a class=\"trait\" href=\"sqlx/trait.Connection.html\" title=\"trait sqlx::Connection\">Connection</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Connection.html#associatedtype.Options\" title=\"type sqlx::Connection::Options\">Options</a>\n) -&gt; <a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new connection pool with a default pool configuration and\nthe given <code>ConnectOptions</code>.</p>\n<p>The pool will establish connections only as needed.</p>\n<p>The default configuration is mainly suited for testing and light-duty applications.\nFor production applications, you’ll likely want to make at least few tweaks.</p>\n<p>See <a href=\"sqlx/pool/struct.PoolOptions.html#method.new\" title=\"associated function sqlx::pool::PoolOptions::new\"><code>PoolOptions::new()</code></a> for details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.acquire\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.acquire\" class=\"fn\">acquire</a>(\n    &amp;self\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sqlx/pool/struct.PoolConnection.html\" title=\"struct sqlx::pool::PoolConnection\">PoolConnection</a>&lt;DB&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;&gt; + 'static</h4></section></summary><div class=\"docblock\"><p>Retrieves a connection from the pool.</p>\n<p>The total time this method is allowed to execute is capped by\n<a href=\"sqlx/pool/struct.PoolOptions.html#method.acquire_timeout\" title=\"method sqlx::pool::PoolOptions::acquire_timeout\"><code>PoolOptions::acquire_timeout</code></a>.\nIf that timeout elapses, this will return <a href=\"sqlx/enum.Error.html#variant.PoolClosed\" title=\"variant sqlx::Error::PoolClosed\"><code>Error::PoolClosed</code></a>.</p>\n<h6 id=\"note-cancellationtimeout-may-drop-connections\"><a href=\"#note-cancellationtimeout-may-drop-connections\">Note: Cancellation/Timeout May Drop Connections</a></h6>\n<p>If <code>acquire</code> is cancelled or times out after it acquires a connection from the idle queue or\nopens a new one, it will drop that connection because we don’t want to assume it\nis safe to return to the pool, and testing it to see if it’s safe to release could introduce\nsubtle bugs if not implemented correctly. To avoid that entirely, we’ve decided to not\ngracefully handle cancellation here.</p>\n<p>However, if your workload is sensitive to dropped connections such as using an in-memory\nSQLite database with a pool size of 1, you can pretty easily ensure that a cancelled\n<code>acquire()</code> call will never drop connections by tweaking your <a href=\"sqlx/pool/struct.PoolOptions.html\" title=\"struct sqlx::pool::PoolOptions\"><code>PoolOptions</code></a>:</p>\n<ul>\n<li>Set <a href=\"sqlx/pool/struct.PoolOptions.html#method.test_before_acquire\" title=\"method sqlx::pool::PoolOptions::test_before_acquire\"><code>test_before_acquire(false)</code></a></li>\n<li>Never set <a href=\"sqlx/pool/struct.PoolOptions.html#method.before_acquire\" title=\"method sqlx::pool::PoolOptions::before_acquire\"><code>before_acquire</code></a> or\n<a href=\"sqlx/pool/struct.PoolOptions.html#method.after_connect\" title=\"method sqlx::pool::PoolOptions::after_connect\"><code>after_connect</code></a>.</li>\n</ul>\n<p>This should eliminate any potential <code>.await</code> points between acquiring a connection and\nreturning it.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_acquire\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.try_acquire\" class=\"fn\">try_acquire</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sqlx/pool/struct.PoolConnection.html\" title=\"struct sqlx::pool::PoolConnection\">PoolConnection</a>&lt;DB&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to retrieve a connection from the pool if there is one available.</p>\n<p>Returns <code>None</code> immediately if there are no idle connections available in the pool\nor there are tasks waiting for a connection which have yet to wake.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.begin\" class=\"method\"><h4 class=\"code-header\">pub async fn <a href=\"sqlx/struct.Pool.html#tymethod.begin\" class=\"fn\">begin</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sqlx/struct.Transaction.html\" title=\"struct sqlx::Transaction\">Transaction</a>&lt;'static, DB&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Retrieves a connection and immediately begins a new transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_begin\" class=\"method\"><h4 class=\"code-header\">pub async fn <a href=\"sqlx/struct.Pool.html#tymethod.try_begin\" class=\"fn\">try_begin</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sqlx/struct.Transaction.html\" title=\"struct sqlx::Transaction\">Transaction</a>&lt;'static, DB&gt;&gt;, <a class=\"enum\" href=\"sqlx/enum.Error.html\" title=\"enum sqlx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to retrieve a connection and immediately begins a new transaction if successful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.close\" class=\"fn\">close</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Shut down the connection pool, immediately waking all tasks waiting for a connection.</p>\n<p>Upon calling this method, any currently waiting or subsequent calls to <a href=\"sqlx/struct.Pool.html#method.acquire\" title=\"method sqlx::Pool::acquire\"><code>Pool::acquire</code></a> and\nthe like will immediately return <a href=\"sqlx/enum.Error.html#variant.PoolClosed\" title=\"variant sqlx::Error::PoolClosed\"><code>Error::PoolClosed</code></a> and no new connections will be opened.\nChecked-out connections are unaffected, but will be gracefully closed on-drop\nrather than being returned to the pool.</p>\n<p>Returns a <code>Future</code> which can be <code>.await</code>ed to ensure all connections are\ngracefully closed. It will first close any idle connections currently waiting in the pool,\nthen wait for all checked-out connections to be returned or closed.</p>\n<p>Waiting for connections to be gracefully closed is optional, but will allow the database\nserver to clean up the resources sooner rather than later. This is especially important\nfor tests that create a new pool every time, otherwise you may see errors about connection\nlimits being exhausted even when running tests in a single thread.</p>\n<p>If the returned <code>Future</code> is not run to completion, any remaining connections will be dropped\nwhen the last handle for the given pool instance is dropped, which could happen in a task\nspawned by <code>Pool</code> internally and so may be unpredictable otherwise.</p>\n<p><code>.close()</code> may be safely called and <code>.await</code>ed on multiple handles concurrently.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_closed\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.is_closed\" class=\"fn\">is_closed</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if <a href=\"sqlx/struct.Pool.html#method.close\" title=\"method sqlx::Pool::close\"><code>.close()</code></a> has been called on the pool, <code>false</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close_event\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.close_event\" class=\"fn\">close_event</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sqlx/pool/struct.CloseEvent.html\" title=\"struct sqlx::pool::CloseEvent\">CloseEvent</a> <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CloseEvent\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Get a future that resolves when <a href=\"sqlx/struct.Pool.html#method.close\" title=\"method sqlx::Pool::close\"><code>Pool::close()</code></a> is called.</p>\n<p>If the pool is already closed, the future resolves immediately.</p>\n<p>This can be used to cancel long-running operations that hold onto a <a href=\"sqlx/pool/struct.PoolConnection.html\" title=\"struct sqlx::pool::PoolConnection\"><code>PoolConnection</code></a>\nso they don’t prevent the pool from closing (which would otherwise wait until all\nconnections are returned).</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<p>These examples use Postgres and Tokio, but should suffice to demonstrate the concept.</p>\n<p>Do something when the pool is closed:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>sqlx::PgPool;\n\n<span class=\"kw\">let </span>pool = PgPool::connect(<span class=\"string\">&quot;postgresql://...&quot;</span>).<span class=\"kw\">await</span><span class=\"question-mark\">?</span>;\n\n<span class=\"kw\">let </span>pool2 = pool.clone();\n\ntokio::spawn(<span class=\"kw\">async move </span>{\n    <span class=\"comment\">// Demonstrates that `CloseEvent` is itself a `Future` you can wait on.\n    // This lets you implement any kind of on-close event that you like.\n    </span>pool2.close_event().<span class=\"kw\">await</span>;\n\n    <span class=\"macro\">println!</span>(<span class=\"string\">&quot;Pool is closing!&quot;</span>);\n\n    <span class=\"comment\">// Imagine maybe recording application statistics or logging a report, etc.\n</span>});\n\n<span class=\"comment\">// The rest of the application executes normally...\n\n// Close the pool before the application exits...\n</span>pool.close().<span class=\"kw\">await</span>;\n</code></pre></div>\n<p>Cancel a long-running operation:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>sqlx::{Executor, PgPool};\n\n<span class=\"kw\">let </span>pool = PgPool::connect(<span class=\"string\">&quot;postgresql://...&quot;</span>).<span class=\"kw\">await</span><span class=\"question-mark\">?</span>;\n\n<span class=\"kw\">let </span>pool2 = pool.clone();\n\ntokio::spawn(<span class=\"kw\">async move </span>{\n    pool2.close_event().do_until(<span class=\"kw\">async </span>{\n        <span class=\"comment\">// This statement normally won&#39;t return for 30 days!\n        // (Assuming the connection doesn&#39;t time out first, of course.)\n        </span>pool2.execute(<span class=\"string\">&quot;SELECT pg_sleep(&#39;30 days&#39;)&quot;</span>).<span class=\"kw\">await</span>;\n\n        <span class=\"comment\">// If the pool is closed before the statement completes, this won&#39;t be printed.\n        // This is because `.do_until()` cancels the future it&#39;s given if the\n        // pool is closed first.\n        </span><span class=\"macro\">println!</span>(<span class=\"string\">&quot;Waited!&quot;</span>);\n    }).<span class=\"kw\">await</span>;\n});\n\n<span class=\"comment\">// This normally wouldn&#39;t return until the above statement completed and the connection\n// was returned to the pool. However, thanks to `.do_until()`, the operation was\n// cancelled as soon as we called `.close().await`.\n</span>pool.close().<span class=\"kw\">await</span>;\n</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of connections currently active. This includes idle connections.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_idle\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.num_idle\" class=\"fn\">num_idle</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of connections active and idle (not in use).</p>\n<p>As of 0.6.0, this has been fixed to use a separate atomic counter and so should be fine to\ncall even at high load.</p>\n<p>This previously called [<code>crossbeam::queue::ArrayQueue::len()</code>] which waits for the head and\ntail pointers to be in a consistent state, which may never happen at high levels of churn.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect_options\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.connect_options\" class=\"fn\">connect_options</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;&lt;&lt;DB as <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Database.html#associatedtype.Connection\" title=\"type sqlx::Database::Connection\">Connection</a> as <a class=\"trait\" href=\"sqlx/trait.Connection.html\" title=\"trait sqlx::Connection\">Connection</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Connection.html#associatedtype.Options\" title=\"type sqlx::Connection::Options\">Options</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Gets a clone of the connection options for this pool</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_connect_options\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.set_connect_options\" class=\"fn\">set_connect_options</a>(\n    &amp;self,\n    connect_options: &lt;&lt;DB as <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Database.html#associatedtype.Connection\" title=\"type sqlx::Database::Connection\">Connection</a> as <a class=\"trait\" href=\"sqlx/trait.Connection.html\" title=\"trait sqlx::Connection\">Connection</a>&gt;::<a class=\"associatedtype\" href=\"sqlx/trait.Connection.html#associatedtype.Options\" title=\"type sqlx::Connection::Options\">Options</a>\n)</h4></section></summary><div class=\"docblock\"><p>Updates the connection options this pool will use when opening any future connections.  Any\nexisting open connection in the pool will be left as-is.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.options\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sqlx/struct.Pool.html#tymethod.options\" class=\"fn\">options</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"sqlx/pool/struct.PoolOptions.html\" title=\"struct sqlx::pool::PoolOptions\">PoolOptions</a>&lt;DB&gt;</h4></section></summary><div class=\"docblock\"><p>Get the options for this pool</p>\n</div></details></div></details>",0,"sqlx::AnyPool"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Pool%3CDB%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Pool%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;<span class=\"where fmt-newline\">where\n    DB: <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>,</span></h3></section></summary><div class=\"docblock\"><p>Returns a new <a href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a> tied to the same shared connection pool.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sqlx::AnyPool"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Pool%3CDB%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Pool%3CDB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;DB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sqlx/struct.Pool.html\" title=\"struct sqlx::Pool\">Pool</a>&lt;DB&gt;<span class=\"where fmt-newline\">where\n    DB: <a class=\"trait\" href=\"sqlx/trait.Database.html\" title=\"trait sqlx::Database\">Database</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sqlx::AnyPool"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()