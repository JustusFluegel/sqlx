(function() {var implementors = {
"dotenvy":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"dotenvy/enum.Error.html\" title=\"enum dotenvy::Error\">Error</a>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,</span>"]],
"futures_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.SendError.html\" title=\"struct futures_channel::mpsc::SendError\">SendError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TrySendError.html\" title=\"struct futures_channel::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Canceled.html\" title=\"struct futures_channel::oneshot::Canceled\">Canceled</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TryRecvError.html\" title=\"struct futures_channel::mpsc::TryRecvError\">TryRecvError</a>"]],
"futures_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_task/struct.SpawnError.html\" title=\"struct futures_task::SpawnError\">SpawnError</a>"]],
"futures_util":[["impl&lt;T, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryChunksError.html\" title=\"struct futures_util::stream::TryChunksError\">TryChunksError</a>&lt;T, E&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReuniteError.html\" title=\"struct futures_util::io::ReuniteError\">ReuniteError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/future/struct.Aborted.html\" title=\"struct futures_util::future::Aborted\">Aborted</a>"],["impl&lt;T, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryReadyChunksError.html\" title=\"struct futures_util::stream::TryReadyChunksError\">TryReadyChunksError</a>&lt;T, E&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>, Item&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ReuniteError.html\" title=\"struct futures_util::stream::ReuniteError\">ReuniteError</a>&lt;T, Item&gt;"]],
"hex":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"hex/enum.FromHexError.html\" title=\"enum hex::FromHexError\">FromHexError</a>"]],
"idna":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"idna/struct.Errors.html\" title=\"struct idna::Errors\">Errors</a>"]],
"indexmap":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"indexmap/struct.TryReserveError.html\" title=\"struct indexmap::TryReserveError\">TryReserveError</a>"]],
"itertools":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"itertools/structs/struct.ExactlyOneError.html\" title=\"struct itertools::structs::ExactlyOneError\">ExactlyOneError</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"nix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"nix/env/struct.ClearEnvError.html\" title=\"struct nix::env::ClearEnvError\">ClearEnvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"nix/errno/enum.Errno.html\" title=\"enum nix::errno::Errno\">Errno</a>"]],
"nom":[["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"nom/error/struct.VerboseError.html\" title=\"struct nom::error::VerboseError\">VerboseError</a>&lt;I&gt;"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"nom/enum.Err.html\" title=\"enum nom::Err\">Err</a>&lt;E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"nom/error/struct.Error.html\" title=\"struct nom::error::Error\">Error</a>&lt;I&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"rand":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.BernoulliError.html\" title=\"enum rand::distributions::BernoulliError\">BernoulliError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.WeightedError.html\" title=\"enum rand::distributions::WeightedError\">WeightedError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadError.html\" title=\"struct rand::rngs::adapter::ReadError\">ReadError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"rustix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rustix/io/struct.Errno.html\" title=\"struct rustix::io::Errno\">Errno</a>"]],
"serde":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>"]],
"serde_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/struct.Error.html\" title=\"struct serde_json::Error\">Error</a>"]],
"sqlx_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"sqlx_core/error/struct.UnexpectedNullError.html\" title=\"struct sqlx_core::error::UnexpectedNullError\">UnexpectedNullError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"sqlx_core/migrate/enum.MigrateError.html\" title=\"enum sqlx_core::migrate::MigrateError\">MigrateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"sqlx_core/error/enum.Error.html\" title=\"enum sqlx_core::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"sqlx_core/rt/struct.TimeoutError.html\" title=\"struct sqlx_core::rt::TimeoutError\">TimeoutError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"sqlx_core/error/trait.DatabaseError.html\" title=\"trait sqlx_core::error::DatabaseError\">DatabaseError</a>&gt;"]],
"tempfile":[["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tempfile/struct.PersistError.html\" title=\"struct tempfile::PersistError\">PersistError</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tempfile/struct.PathPersistError.html\" title=\"struct tempfile::PathPersistError\">PathPersistError</a>"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelFilterError.html\" title=\"struct tracing_core::metadata::ParseLevelFilterError\">ParseLevelFilterError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.SetGlobalDefaultError.html\" title=\"struct tracing_core::dispatcher::SetGlobalDefaultError\">SetGlobalDefaultError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelError.html\" title=\"struct tracing_core::metadata::ParseLevelError\">ParseLevelError</a>"]],
"url":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()