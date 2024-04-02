import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercaseApproved'
})
export class UppercaseApprovedPipe implements PipeTransform {
    transform(value: string, aprobado: boolean): string {
    return aprobado ? value.toUpperCase() : value;
}
}