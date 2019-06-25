import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    name: string;
    id: number;
    inStock: boolean;

    constructor() {
        this.id = Math.trunc(Math.random() * 100);
        this.inStock = Math.random() > 0.5;
    }
}