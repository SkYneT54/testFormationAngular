import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {
  readonly DEFAUT_IMAGE = 'default.png';
  transform(path: string): string {
    if (path.trim().length > 0) {
      return path;
    }
    return this.DEFAUT_IMAGE;
  }

}
