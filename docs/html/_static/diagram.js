let t = `
  <pre class="mermaid">
        gantt
            title Course 2024/25
            tickInterval 1week
            dateFormat DD-MM-YYYY
            excludes 28-10-2024, 29-10-2024, 30-10-2024, 31-10-2024, 01-11-2024,

        section 2.1
            Continuous Profesional Developmnent (CPD) Part 1          :active, 14-09-2024, 09-10-2024
            Continuous Profesional Developmnent (CPD) Part 2          :14-09-2024, 03-06-2025

        section 2.2
            Part 1          :21-09-2024, 18-03-2025
            Part 2          :21-09-2024, 30-10-2024

		section 2.3
			Part 1          :11-01-2025, 19-02-2025
			Part 2          :11-01-2025, 19-02-2025    

		section 2.4
			Part 1          :15-10-2024, 13-11-2024
			Part 2          :15-10-2024, 02-01-2025

		section 2.5
			Part 1          :09-11-2024, 04-12-2024
			Part 2          :09-11-2024, 15-01-2025

		section 2.6
			Part 1          :28-03-2025, 21-05-2025
			Part 2          :28-03-2025, 21-05-2025

		section 2.7
			Part 1          :15-10-2024, 07-05-2025
			Part 2          :15-10-2024, 07-05-2025

		section 2.8
			Part 1          :22-02-2025, 15-04-2025
			Part 2          :22-02-2025, 15-04-2025

  </pre>
  `;
document.write(t);
