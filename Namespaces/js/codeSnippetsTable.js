var CodeSnippets = (function () {
    let data = [];
    let sortState = { column: "objectName", asc: true };
    let tableId = "codeSnippetsTable";

    function init(json) {
        data = Object.entries(json).map(([key, value]) => ({
            objectName: key,
            code: value.code || "",
            id: value.id || ""
        }));

        if (data.length === 0) {
            console.warn("No valid data to display.");
            document.getElementById("code-snippets-container").innerText = "No data to display.";
            return;
        }

        renderTable();
    }

    function renderTable() {
        const container = document.getElementById("code-snippets-container");
        container.innerHTML = "";

        const table = document.createElement("table");
        table.id = tableId;
        table.className = "sortable-table";

        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");

        const headers = [
            { key: "code", label: "Code Snippet" },
            { key: "objectName", label: "Object name" },
            { key: "id", label: "ID" }
        ];

        headers.forEach(({ key, label }) => {
            const th = document.createElement("th");
            th.innerText = label;

            if (sortState.column === key) {
                th.classList.add(sortState.asc ? "sorted-asc" : "sorted-desc");
            }

            th.addEventListener("click", () => sortBy(key));
            trHead.appendChild(th);
        });

        thead.appendChild(trHead);

        const tbody = document.createElement("tbody");
        data.forEach(row => {
            const tr = document.createElement("tr");
            headers.forEach(({ key }) => {
                const td = document.createElement("td");
                td.innerText = row[key];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    }

    function sortBy(column) {
        if (sortState.column === column) {
            sortState.asc = !sortState.asc;
        } else {
            sortState.column = column;
            sortState.asc = true;
        }

        data.sort((a, b) => {
            const aVal = a[column];
            const bVal = b[column];

            if (typeof aVal === "number" && typeof bVal === "number") {
                return sortState.asc ? aVal - bVal : bVal - aVal;
            }

            return sortState.asc
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
        });

        renderTable();
    }

    return {
        init
    };
})();