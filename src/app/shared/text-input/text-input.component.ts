import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, NgControl } from '@angular/forms';
import { publicDecrypt } from 'crypto';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input',{static:true}) input!:ElementRef
  @Input() type = 'text';
  @Input() label!:string;

  constructor(@Self() public controlDir:NgControl) { }



  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

  ngOnInit(): void {
    
  }

  get control(): UntypedFormControl{
    return this.controlDir.control as UntypedFormControl
  }

}
