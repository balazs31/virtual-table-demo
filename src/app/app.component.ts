import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  tableData = [];
  columns = [];
  cdkStatus = false;
  rowsNumber = 1000;
  ngOnInit() {}

  generateColumns(amount) {
    const columns = [];
    for (let i = 0; i < amount; i++) {
      columns.push(i + 1);
    }

    this.columns = columns;
  }

  toggleCdk() {
    this.cdkStatus = !this.cdkStatus;
  }

  clearData() {
    this.tableData = [];
  }
  generateData() {
    this.generateColumns(31);

    const tableData = [];
    for (let i = 0; i < this.rowsNumber; i++) {
      tableData.push({
        name: `Name ${i}`,
        id: i,
        columns: [...this.columns]
      });
    }
    console.log(tableData.length);
    this.tableData = tableData;
  }
}
