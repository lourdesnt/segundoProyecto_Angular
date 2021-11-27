import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/shared2/interfaces2/canal';
import { CanalService } from 'src/app/shared2/servicios2/canal.service';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})
export class CanalesComponent implements OnInit {

  public listadoCanales: Canal[];

  constructor(private canalService : CanalService ) {
    this.listadoCanales = [ ];
    }

  ngOnInit(): void {
    this.buscarCancion("Coldplay", "Paradise");
    this.buscarCancion("One Direction", "What Makes You Beautiful");
  }

  private buscarCancion(artista: string, titulo: string): void {
    var c : Canal;
    this.canalService.buscarCancion(artista, titulo).subscribe(
      (data) => {
        c = { artist: artista, title: titulo, lyrics: data.lyrics }
        this.listadoCanales.push(c);
      },
      (error) => {
        console.log('ERROR: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public mostrarCancion(titulo: string): void {
    alert(`Cancion seleccionada: ${ titulo }`);
  }

}
