/* import {Point} from './point';

let point = new Point(1 ,2);
point.draw(); */

import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(` Lokes Count is : ${component.likesCount} and the button is ${component.isSelected}`);