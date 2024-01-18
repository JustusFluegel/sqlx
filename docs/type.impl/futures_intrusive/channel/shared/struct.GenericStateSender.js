(function() {var type_impls = {
"futures_intrusive":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericStateSender%3CMutexType,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#724-738\">source</a><a href=\"#impl-GenericStateSender%3CMutexType,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MutexType, T&gt; <a class=\"struct\" href=\"futures_intrusive/channel/shared/struct.GenericStateSender.html\" title=\"struct futures_intrusive::channel::shared::GenericStateSender\">GenericStateSender</a>&lt;MutexType, T&gt;<span class=\"where fmt-newline\">where\n    MutexType: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + 'static,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#735-737\">source</a><h4 class=\"code-header\">pub fn <a href=\"futures_intrusive/channel/shared/struct.GenericStateSender.html#tymethod.send\" class=\"fn\">send</a>(&amp;self, value: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"futures_intrusive/channel/struct.ChannelSendError.html\" title=\"struct futures_intrusive::channel::ChannelSendError\">ChannelSendError</a>&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Writes a single value to the channel.</p>\n<p>This will notify waiters about the availability of the value.\nIf a value had been written to the channel before, or if the\nchannel is closed, the new value will be rejected and\nreturned inside the error variant.</p>\n</div></details></div></details>",0,"futures_intrusive::channel::state_broadcast::if_alloc::shared::if_std::StateSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericStateSender%3CMutexType,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#607-615\">source</a><a href=\"#impl-Debug-for-GenericStateSender%3CMutexType,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MutexType, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"futures_intrusive/channel/shared/struct.GenericStateSender.html\" title=\"struct futures_intrusive::channel::shared::GenericStateSender\">GenericStateSender</a>&lt;MutexType, T&gt;<span class=\"where fmt-newline\">where\n    MutexType: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#612-614\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","futures_intrusive::channel::state_broadcast::if_alloc::shared::if_std::StateSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericStateSender%3CMutexType,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#627-642\">source</a><a href=\"#impl-Clone-for-GenericStateSender%3CMutexType,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MutexType, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"futures_intrusive/channel/shared/struct.GenericStateSender.html\" title=\"struct futures_intrusive::channel::shared::GenericStateSender\">GenericStateSender</a>&lt;MutexType, T&gt;<span class=\"where fmt-newline\">where\n    MutexType: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#632-641\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","futures_intrusive::channel::state_broadcast::if_alloc::shared::if_std::StateSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-GenericStateSender%3CMutexType,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#644-658\">source</a><a href=\"#impl-Drop-for-GenericStateSender%3CMutexType,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MutexType, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_intrusive/channel/shared/struct.GenericStateSender.html\" title=\"struct futures_intrusive::channel::shared::GenericStateSender\">GenericStateSender</a>&lt;MutexType, T&gt;<span class=\"where fmt-newline\">where\n    MutexType: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_intrusive/channel/state_broadcast.rs.html#649-657\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","futures_intrusive::channel::state_broadcast::if_alloc::shared::if_std::StateSender"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()