import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumberPure',
  pure: true // This makes it a pure pipe
})
export class FormatNumberpurePipe implements PipeTransform {
  transform(value: number): string {
    console.log('Pure pipe called');
    return value.toLocaleString(); // Formats number with commas
  }
}
