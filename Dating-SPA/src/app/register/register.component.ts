import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome:any;
  @Output() cancelRegistration = new EventEmitter();
  
  model:any={  };

  constructor(private authService:AuthService) { }

  register()
  {
    this.authService.register(this.model).subscribe(()=>
    {
      console.log('registeration succesful');
    },error =>{
      console.log('registeration unsuccesful '+error);
    }

    );
  }
  
  cancel()
  {
    this.cancelRegistration.emit(false);
    //this.valuesFromHome=!this.valuesFromHome;
  }

  ngOnInit() {
  }

}
