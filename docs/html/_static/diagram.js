const title = "Course 2024/25";
const modules = [ // {{{
    ["2.1", 
        ["14-07-2024", "09-10-2024", true, 1200, "long name"],
        ["14-09-2024", "30-10-2024", true, 1800, "long name"],
    ],

    ["2.2",
        ["21-09-2024", "18-03-2025", true, 1800, "long name"],
        ["21-09-2024", "30-10-2024", false, 1200, "long name"],
    ],

    ["2.3",
        ["11-01-2025", "19-02-2025", true, 1200, "long name"],
        ["11-01-2025", "19-02-2025", true, 1800, "long name"],
    ],

    ["2.4",
        ["15-10-2024", "13-11-2024", true, 1200, "long name"],
        ["15-10-2024", "02-01-2025", false, 1800, "long name"],
    ],

    ["2.5",
        ["09-11-2024", "04-12-2024", true, 1500, "long name"],
        ["09-11-2024", "15-01-2025", false, 1500, "long name"],
    ],

    ["2.6",
        ["28-03-2025", "21-05-2025", false, 1800, "long name"],
        ["28-03-2025", "21-05-2025", true, 1200, "long name"],
    ],

    ["2.7",
        ["15-10-2024", "07-05-2025", false, 1950, "long name"],
        ["15-10-2024", "07-05-2025", true, 1050, "long name"],
    ],

    ["2.8",
        ["22-02-2025", "15-04-2025", true, 1500, "long name"],
        ["22-02-2025", "15-04-2025", true, 1500, "long name"],
    ],
]; // }}}
const holidays = [ // {{{
    ["28-10-2024", "01-11-2024"],
    ["23-12-2024", "03-01-2025"],
    ["17-02-2025", "21-02-2025"],
    ["07-04-2025", "21-04-2025"],
    ["25-05-2025", "30-05-2025"],
    ["22-07-2025", "01-09-2025"],

]; // }}}

let sheet = document.createElement("style");
sheet.textContent = `

.grid .tick {
  stroke: red;
  opacity: 0.2;
  shape-rendering: crispEdges;
}


`;
document.head.appendChild(sheet);

let assignements = "";
modules.forEach((m) => {
    let o = [];
    o.push("section " + m[0]);
    g1 = m[1][2] ? " " : "done, ";
    g2 = m[2][2] ? " " : "done, ";
    o.push(m[1][3] + ": " + g1 + m[1][0] +", " + m[1][1]);
    o.push(m[2][3] + ": " + g2 + m[2][0] +", " + m[2][1]);
    o.push("\n");
    assignements += o.join("\n");

});

let daysOff = [];
holidays.forEach((h) => {
    let start = new Date(h[0].replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    let end = new Date(h[1].replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    let days = (end - start) / (1000 * 3600 * 24);
    let nextDay = start;
    nextDay.setDate(start.getDate())
    
    for(i=-1; i<days; i++){
        // console.log(formatDate(nextDay))
        daysOff.push(formatDate(nextDay))
        nextDay.setDate(nextDay.getDate() + 1)
    }
});


daysOff = daysOff.join(", ");

// TEMPLATE {{{
let template = ` 
  <pre class="mermaid">
        gantt
            axisFormat  
            title ${title}
            tickInterval 1week
            weekday monday
            dateFormat DD-MM-YYYY
            excludes ${daysOff}

            ${assignements}

  </pre>
  `; // }}}
document.write(template);



function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Pad day and month with leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return `${day}-${month}-${year}`;
}
