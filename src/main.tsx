import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

let rootElement = document.getElementById("root");

if (!rootElement) {
	rootElement = document.createElement("div");
	rootElement.id = "root";
	document.body.append(rootElement);
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
