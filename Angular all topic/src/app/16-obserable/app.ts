import { of } from 'rxjs';

of(10, 20, 30).subscribe(value => {
  console.log(value);
});