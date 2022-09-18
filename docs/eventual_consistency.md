### Consistency principles
Discord operates using the [eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency) paradigm to operate. This means that changes applied to one service might not immediately be available when querying another service. This means that your bots should also be created with this in mind and be fault-tolerant.

Specifically this means that events might
- never be sent to a client
- be sent _exactly_ once to a client
- be sent multiple times to a client

By default **blurple.js** is always consistent. This makes it impossible to specifically test these special cases, that you ought to watch out for though. To combat this, we have specific ways of forcing eventually consistent behavior, which you can trigger as follows.

**TODO**
