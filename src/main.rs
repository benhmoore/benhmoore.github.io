use leptos::*;

mod components;
use components::app::App;

fn main() {
    mount_to_body(|| view! { <App/> })
}
