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

  getCarData() {
    let query = {
        make: this.make,
        model: this.model,
        year: this.year,
        trany: this.trany,
        drive: this.drive,
      };
// this change was added
// yay area
// this is also new
// anotha one
// last change
// this change was made on the development branch
// 2nd change made on the development branch

    const query2 = { make: 'Toyota',
      model: 'Camry',
      year: 2018,
      trany: 'Automatic (S8)',
      drive: 'Front-Wheel Drive' };

    this.carService.getCarInfo(query2).subscribe(data => {
        // do something with the car data
        console.log('hi');
        console.log(data);
    });

    }


  ngOnInit() {
    this.getCarData();
  }

}
