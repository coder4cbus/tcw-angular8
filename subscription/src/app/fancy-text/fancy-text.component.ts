import {Component} from '@angular/core';

@Component ({
    selector: "fancy-text",
    // styles: ["input[type='text'] {border-color:black; border-width:thin; border-radius:6px; height:20pt;}"],
    styleUrls: ["./fancy-text.component.css"],
    template: "<input type='text'/>"
})
export class FancyText {
    
}