import { Component } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';

@Component({
  selector: 'tooltip-component',
  template: ` <div class="custom-tooltip" [style.background-color]="color">
    <p>
      <span>{{ data.make }}</span>
    </p>
    <p><span>Country: </span>{{ data.model }}</p>
    <p><span>Total: </span>{{ data.price }}</p>
  </div>`,
  styles: [
    `
      :host {
        position: absolute;
        width: 150px;
        height: 70px;
        pointer-events: none;
        transition: opacity 1s;
      }

      :host.ag-tooltip-hiding {
        opacity: 0;
      }

      .custom-tooltip p {
        margin: 5px;
        white-space: nowrap;
      }

      .custom-tooltip p:first-of-type {
        font-weight: bold;
      }
    `,
  ],
})
export class CustomTooltipComponent implements ITooltipAngularComp {
  private params!: { color: string } & ITooltipParams;
  public data!: any;
  public color!: string;

  agInit(params: { color: string } & ITooltipParams): void {
    this.params = params;

    this.data = params.api!.getDisplayedRowAtIndex(params.rowIndex!)!.data;
    this.color = this.params.color || 'white';
  }
}