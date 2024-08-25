# talks

Slides &amp; code for my talks, using [Slidev](https://sli.dev).

[Upcoming Talks](https://jinyuz.dev/talks/)


## Architecture


This repository exists and is added as a submodule in
[jinyuz.dev](https://github.com/yujinyuz/jinyuz.dev/tree/master/static) inside `static/talks`
directory.


This repository uses sli.dev while the main repository is using hugo. The intention is to publish
all the talks here and let hugo serve them.

This is possible since anything inside the `static` directory in hugo, when deployed, can be
accessed at the root of the website.
```
+-------+     +-------------------------+     +------+     +------------------+
| talks | --> | jinyuz.dev/static/talks | --> | hugo | --> | jinyuz.dev/talks |
+-------+     +-------------------------+     +------+     +------------------+
```
