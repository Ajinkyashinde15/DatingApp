import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome:any;
  @Output() cancelRegistration = new EventEmitter();
  
  model:any={  };

  constructor(private authService:AuthService, private alertify:AlertifyService) { }

  register()
  {
    this.authService.register(this.model).subscribe(()=>
    {
      this.alertify.success('Registeration succesful');
    },error =>{
      this.alertify.error('registeration unsuccesful '+error);
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
