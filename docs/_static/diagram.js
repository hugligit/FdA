const title = "Course 2024/25";
const modules = [ // {{{
    ["2.1", 
        ["19-09-2024", "07-10-2024", true, 1200, "long name"],
        ["19-09-2024", "06-06-2025", true, 1800, "long name"],
    ],

    ["2.2",
        ["03-10-2024", "04-11-2024", true, 1800, "long name"],
        ["03-10-2024", "17-03-2025", false, 1200, "long name"],
    ],

    ["2.3",
        ["17-10-2024", "02-12-2024", true, 1200, "long name"],
        ["17-10-2024", "02-12-2024", true, 1800, "long name"],
    ],

    ["2.4",
        ["14-11-2024", "13-01-2025", true, 1200, "long name"],
        ["14-11-2024", "13-01-2025", false, 1800, "long name"],
    ],

    ["2.5",
        ["16-01-2025", "24-02-2025", true, 1500, "long name"],
        ["16-01-2025", "24-02-2025", false, 1500, "long name"],
    ],

    ["2.6",
        ["24-04-2025", "19-05-2025", false, 1800, "long name"],
        ["24-04-2025", "19-05-2025", true, 1200, "long name"],
    ],

    ["2.7",
        ["09-01-2025", "06-05-2025", false, 1950, "long name"],
        ["09-01-2025", "06-05-2025", true, 1050, "long name"],
    ],

    ["2.8",
        ["27-02-2025", "21-04-2025", true, 1500, "long name"],
        ["27-02-2025", "21-04-2025", true, 1500, "long name"],
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
const milestones = [ // {{{
    [ "19-09-2024", "Statement I" ],
    [ "10-10-2024", "Information" ],
    [ "12-12-2024", "Feedback I" ],
    [ "12-12-2024", "Notes I" ],
    [ "09-01-2025", "Statement II" ],
    [ "20-03-2025", "Feedback II" ],
    [ "22-05-2025", "Notes II" ],


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

let milestoneSection = "section milestones";
let assignements = "";

milestones.forEach((m) => {
    // let o = [];
    // o.push(m[1] + "  :milestone, isadded, " + m[0], + ", 0d");
    milestoneSection += "\n" + m[1] + "    :milestone, isadded, " + m[0] + ", 0d";



    // milestoneSection += o.join("\n");
});

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

            ${milestoneSection}
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
