import { Component, Input, OnInit } from '@angular/core';
import { get, getDatabase, ref } from 'firebase/database';
@Component({
  selector: 'app-chart',
  template: `
    <div class="chart-container">
      <ngx-charts-bar-vertical
        [results]="chartData"
        [xAxis]="true"
        [yAxis]="true"
      ></ngx-charts-bar-vertical>
    </div>
  `,
  styles: [
    `
      .chart-container {
        width: 500px;
        height: 300px;
        margin-bottom: 20px;
      }
      .data-table {
        width: 300px;
        margin: 0 auto;
        border-collapse: collapse;
      }
      .data-table th,
      .data-table td {
        border: 1px solid black;
        padding: 5px;
      }
      .button-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    `,
  ],
})
export class ChartComponent implements OnInit {
  chartData: { name: string; value: number }[] = [];
  database = getDatabase();
  reservationsRef = ref(this.database, 'reservations');
  cantpeli: { [key: string]: number } = {};
  constructor() {    
    this.mostrarGrafica();
  }

  ngOnInit(): void {
      
  }

  async mostrarGrafica(){
    await this.obtenerDatos();
  }

  async obtenerDatos(){
    return new Promise<void>((resolve, reject) => {
      get(this.reservationsRef).then((snapshot) => {
        const registroCitas = snapshot.val();
        console.log(registroCitas);
  
        if (registroCitas) {
          for (const key in registroCitas) {
            if (registroCitas.hasOwnProperty(key)) {
              const cita = registroCitas[key];
              console.log(cita);
              var pelicula: string = registroCitas[key]['nombrePel'];
              if (this.cantpeli[pelicula]) {
                this.cantpeli[pelicula] += 1;
              } else {
                this.cantpeli[pelicula] = 1;
              }
            }
          }
          console.log(this.cantpeli);
          this.chartData = Object.keys(this.cantpeli).map((key) => {
            console.log(key);
            return { name: key, value: this.cantpeli[key] };
          });
        }
      });
      resolve();
    });
  }

  drawGraphic() {
    console.log("Dentro del q dibuja: ", this.cantpeli);
    console.log(this.cantpeli);
    console.log(Object.keys(this.cantpeli));
    console.log(Object.values(this.cantpeli));
    const labels: string[] = Object.keys(this.cantpeli);
    console.log(labels);

    const value: number[] = Object.values(this.cantpeli);
    console.log(value);
    this.chartData = labels.map((label) => {
      return { name: label, value: value.shift() } as {
        name: string;
        value: number;
      };
    });
  }
}
