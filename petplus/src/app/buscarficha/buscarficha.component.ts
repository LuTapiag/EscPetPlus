import { Component, OnInit } from '@angular/core';
import { FichaserviceService } from '../fichaservice.service';
import { Animal } from '../models/animal';
import { Color } from '../models/color';

@Component({
  selector: 'app-buscarficha',
  templateUrl: './buscarficha.component.html',
  styleUrls: ['./buscarficha.component.css']
})
export class BuscarfichaComponent implements OnInit {
buscar() {
throw new Error('Method not implemented.');
}
   //Variable que trae a todos los animales
   public animal: Array<any> = []
   public color: Array<any> = []
 
   //Variable con la cual realizamos el filtro por ID
   public buscar_input :string = ""
 
 
 
   //Obtener color
 
   public idcolor :string=""
   public numero = this.idcolor;
   public nombre_color : string="";
 
 
   //Obtener sexo
 
   public idsexo :string=""
   public numerosexo = this.idsexo;
   public nombre_sexo :string="";
 
   //Obetener la especie
 
   public idespecie:string=""
   public numeroespecie = this.idespecie;
   public nombreespecie :string="";
 
   //Obtener la raza
 
   public idraza:string=""
   public numeroraza = this.idraza;
   public nombreraza :string="";
 
 
   //Obtener el estado
 
   public idestado:string=""
   public numeroestado = this.idestado;
   public nombre_estado:string=""; 
 
 
   //Obtener el dueno
 
   public iddueno:string=""
   public numerodueno = this.iddueno;
   public nombre_dueno:string="";
 
   //Variable de los atributos del animal
   public n_ficha: number=0
   public nombreA : string=""
   public n_microchip: string=""
   public raza: string=""

  constructor(private serviceficha:FichaserviceService) { }

  ngOnInit(): void {
    this.ListAnimal()
  }
  ListAnimal(){
    this.serviceficha.getAnimal().subscribe((result : Animal[])=>{
    console.log(result)
    });
  }

}
