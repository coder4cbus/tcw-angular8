import { Component, Input } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancy-checkbox.component.css"],
    template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
})
export class FancyCheckbox {
    @Input() label: string
}