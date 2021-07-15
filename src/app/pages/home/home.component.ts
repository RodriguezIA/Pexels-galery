import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/componets.module';
import { PexelsService } from '../../services/pexels.service';
import { fotosSelecionadas, foto } from '../../models/pexels-fotos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photo: foto = {
    id: 0,
    width: 0, 
    height: 0,
    url: '',
    photographer: '',
    photographer_url: '',
    photographer_id: 0,
    avg_color: '',
    src: {
        original: '',
        large: '',
        large2x: '',
        medium: '',
        small: '',
        portrait: '',
        landscape: '',
        tiny: ''
    }
  }

  seleccionFotos: fotosSelecionadas = {
    page: 0,
    per_page: 0,
    photos: [this.photo],
    total_results: 0,
    next_page: ''
  }

  selectedPhotos: fotosSelecionadas[] = [];
  

  constructor(private ps: PexelsService) { 
  }

  ngOnInit(): void {
    this.ps.getFotos().subscribe(seleccionFotos => (this.seleccionFotos = seleccionFotos));
    console.log(this.seleccionFotos);
  }


}
