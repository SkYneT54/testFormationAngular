import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from 'src/app/cv/models/personne';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
  this.personne = new Personne();
   }

  ngOnInit(): void {
  }

  embaucher(): void{
    var retour = this.embaucheService.embaucher(this.personne);
    if(retour){
      this.toastr.success(`${this.personne.name} ${this.personne.firstname} a bien été ajouté`);
    }else{
      this.toastr.error(`${this.personne.name} ${this.personne.firstname} a déjà été embauché`);
    }
  }

}
