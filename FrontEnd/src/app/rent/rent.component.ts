import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle/vehicle.model';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  public eVehicle : Vehicle;
  constructor() { }

  ngOnInit() {
  }

}
