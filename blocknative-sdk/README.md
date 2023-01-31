This is a library for integrating Block Native in your flow function for [test.flows.network](https://test.flows.network).

## Example usage

```rust
use blocknative_flows::listen_to_address;
use slack_flows::send_message_to_channel;

#[no_mangle]
pub fn run() {
    let address = "0xC8a8f0C656D21bd619FB06904626255af19663ff";

    listen_to_address(address, |bnm| {
        send_message_to_channel("ham-5b68442", "general", bnm.hash);
    });
}
```

In `run()` the `listen_to_address` will create a listener
for new event from address: `0xC8a8f0C656D21bd619FB06904626255af19663ff`.

The `send_message_to_channel` is from [slack-flows](https://test.flows.network/extension/Slack)

The whole document is [here](https://docs.rs/bn-flows).
