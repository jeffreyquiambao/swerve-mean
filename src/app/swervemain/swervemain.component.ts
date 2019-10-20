import { Component, OnInit } from '@angular/core';
import { CarInfoService } from '../car-info.service';

@Component({
  selector: 'app-swervemain',
  templateUrl: './swervemain.component.html',
  styleUrls: ['./swervemain.component.css']
})
export class SwervemainComponent implements OnInit {
  make: string;
  model: string;
  year: number;
  trany: string;
  drive: string;
  cityMileage: number;
  highwayMileage: number;

  /*
  cityMileage = result[0].city08;
  hwyMileage = result[0].highway08;
  avgMileage = (cityMileage+hwyMileage)/2;
  litresPerKm = ((avgMileage) * (1/3.7854) * (1/62.1371));
*/
  constructor(private carService: CarInfoService) { }

  submitCarData() {
    console.log("car data submitted");
    const query = {
      make: this.make,
      model: this.model,
      year: this.year,
      trany: this.trany,
      drive: this.drive,
    };

    console.log(query);

    this.carService.getCarInfo(query).subscribe(data => {
      // do something with the car data
      // console.log('bruh');
       console.log(data) + " bruh";
  });
  }


  ngOnInit() {
  }

}
