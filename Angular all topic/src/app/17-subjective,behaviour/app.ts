import { Subject } from 'rxjs';

const mySubject = new Subject<number>();

mySubject.subscribe(value => {
  console.log("First:", value);
});

mySubject.subscribe(value => {
  console.log("Second:", value);
});

mySubject.next(100);
mySubject.next(200);