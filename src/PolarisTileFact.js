import { LitElement, html, css } from 'lit';

export class PolarisTileFact extends LitElement {
  static get properties() {
    return {
      bigwords: { type: String },
      bgtype: { type: String },
      details: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .tile {
        margin: auto;
        height: 240px;
        width: 100%;
        padding: 0px;
        text-align: center;
        background-color: clear;
        color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
      }

    `;
  }

  constructor() {
    super();
    this.bigwords = 'This, a polaris tile';
  }

  
  getTileStyle() {
    if(this.bgtype == 'darkblue') {
      <style>
        .tile {
          
        }
      </style>
      //this.style.backround-color == '#001e44';
    } /*else if(this.bgtype == 'blue') {
      this.backround-color = '#1e407c';
    } else if(this.bgtype == 'white') {
      this.backround-color = '#fff';
    } else if(this.bgtype == 'fade') {
      this.backround-color;
    } else {
      return true;
    }*/
  }

  getDivider() {
    if(this.details){
      return html`
        <br>
        ----------------------------
        <br>
        <span>${this.details}</span>
      `;
    }
  }

  render() {
    return html`
      <div class="tile">
        <span>${this.bigwords}</span>
        
        ${this.getDivider()}
      </div>
    `;
  }
}
