import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumberImpure',
  pure: false // This makes it an impure pipe
})
export class FormatNumberImpurePipe implements PipeTransform {
  transform(value: number): string {
    // console.log('imPure pipe called');
    return value.toLocaleString(); // Formats number with commas
  }
}
