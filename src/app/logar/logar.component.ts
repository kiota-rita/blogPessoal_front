import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logar(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token,
      environment.nome = this.userLogin.nome,
      environment.foto = this.userLogin.foto,
      environment.id - this.userLogin.id
      
      this.router.navigate(['/inicio'])
    }, erro=>{
      if(erro.status==500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }

}
