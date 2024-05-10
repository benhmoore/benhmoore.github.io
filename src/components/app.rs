// Inside src/components/app.rs
use leptos::*;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <div>
            <h1>{"Hello, I'm Ben."}</h1>
            <p>{"I code and create art."}</p>
            <p>{"Find me on GitHub and Instagram: @benhmoore"}</p>
        </div>
    }
}
