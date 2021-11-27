import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/shared2/clases2/cancion';
import { CanalService } from 'src/app/shared2/servicios2/canal.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public cancion: Cancion;

  constructor(private canalService: CanalService) {
    this.cancion = new Cancion();
   }

  ngOnInit(): void {
  }

  public submit(): void {
    this.canalService.buscarCancion(this.cancion.artista, this.cancion.titulo).subscribe(
      (data) => {
          this.cancion.letra = data.lyrics;
      },
      (error) => {
        console.log('ERROR: ', error);
      }
    )
  }

}
